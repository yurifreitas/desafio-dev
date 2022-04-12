import shutil
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
    crud.get_file_cnab(db_conection())
    return {"Hello": "World"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = file.file.read()
    lines = content.splitlines()
    count = 0
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
        print("*****")
        print(len(line))
        print(tipo)
        print(data)
        print(valor)
        print(cpf)
        print(cartao)
        print(hora)
        print(dono_loja)
        print(nome_loja)
        print(line)
    return {"filename": content}

@app.get("/files")
def get_file():
    return {"lista":"arquivos"}
