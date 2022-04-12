# build a schema using pydantic
from pydantic import BaseModel

class CNAB(BaseModel):
    title: str
    rating: int
    author_id: int

    class Config:
        orm_mode = True