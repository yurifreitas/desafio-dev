from sqlalchemy.orm import Session
import schema, models

def save_file_cnab(db: Session, config):
    for line in config:
        config_model = models.CNAB(**line)
        db.add(config_model)
    db.commit()
    db.refresh(config_model)
    return config_model

def get_file_cnab(db: Session):
    return db.query(models.CNAB).all()

def get_single_client(db: Session,name:str):
    return db.query(models.CNAB).filter_by(dono_loja = name).all()
     

def error_message(message):
    return {
        'error': message
    }