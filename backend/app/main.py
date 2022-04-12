import shutil
import os
from fastapi import FastAPI,File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi_sqlalchemy import DBSessionMiddleware, db

from database import SessionLocal, engine
from sqlalchemy.orm import Session

from models import CNAB as ModelCNAB
from schema import CNAB as CNABSchema



app = FastAPI()
def db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
print(db())
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
def save_file(file):
    global upload_folder
    file_object = file.file
    #create empty file to copy the file_object to
    upload_folder = open(os.path.join(upload_folder, file.filename), 'wb+')
    shutil.copyfileobj(file_object, upload_folder)
    upload_folder.close()

@app.get('/book/')
async def book():
    book = db.session.query(ModelBook).all()
    return book



@app.get("/")
def read_root():
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
