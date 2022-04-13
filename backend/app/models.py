from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()

class CNAB(Base):
    __tablename__ = 'cnab'
    id  = Column(Integer, primary_key=True, index=True)
    line_number = Column(String)
    dono_loja = Column(String)
    nome_loja = Column(String)
    transact_type = Column(String)
    transact_card = Column(String)
    cpf = Column(String)
    transact_date = Column(String)
    transact_value = Column(String)
    transact_time = Column(String)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())
    #file_id = Column(Integer, ForeignKey('file.id'))

    #file = relationship('File')


