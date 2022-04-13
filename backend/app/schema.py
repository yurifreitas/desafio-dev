# build a schema using pydantic
from pydantic import BaseModel

class CNAB(BaseModel):
    line_number: str
    transact_type: str
    transact_value: str
    transact_date: str
    dono_loja : str
    nome_loja : str
    transact_card : str
    cpf : str
    transact_time : str
    

    class Config:
        orm_mode = True