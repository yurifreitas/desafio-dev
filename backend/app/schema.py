# build a schema using pydantic
from pydantic import BaseModel

class CNAB(BaseModel):
    type: str
    value: str
    date: str
    dono_loja : str
    nome_loja : str
    card : str
    cpf : str
    time : str

    class Config:
        orm_mode = True