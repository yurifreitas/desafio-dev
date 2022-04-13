import os
import crud
from fastapi import FastAPI,File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine

from models import CNAB as ModelCNAB
from schema import CNAB as CNABSchema


app = FastAPI()

def db_conection():
    try:
        db = SessionLocal()
        return db
    finally:
        db.close()

origins = [
    "*",
    "http://localhost:3000/arquivos",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    lines_list = crud.get_file_cnab(db_conection())
    return {"Lista Linhas": lines_list}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = file.file.read()
    lines = content.splitlines()
    count = 0
    lines_list = []
    for line in lines:
        line = line.decode("utf-8")
        tipo=line[:1]
        data=line[1:9]
        valor=int(line[10:19])/100.00
        cpf=line[20:30]
        cartao=line[31:42]
        hora=line[43:47]
        dono_loja=line[48:62]
        nome_loja=line[62:81]
        count += 1
        line_content = {
            "line_number":count,
            "transact_type":tipo,
            "transact_date":data,
            "transact_value":valor,
            "cpf":cpf,
            "transact_card":cartao,
            "transact_time":hora,
            "dono_loja":dono_loja,
            "nome_loja":nome_loja,
        }
        lines_list.append(line_content)
    crud.save_file_cnab(db_conection(),lines_list)
    return {"file_line": lines_list,"lines_number": count}

@app.get("/files")
def get_file():
    query = crud.get_file_cnab(db_conection())
    print(query)
    return {"lista":query}
