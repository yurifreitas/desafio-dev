from sqlalchemy.orm import Session
import schema, models

def save_file_cnab(db: Session, config: schema.CNAB):
    config_model = models.CNAB(**config.dict())
    db.add(config_model)
    db.commit()
    db.refresh(config_model)
    return config_model

def get_file_cnab(db: Session):
    print(db)
    return db.query(models.CNAB).first()

def delete_file_cnab(db: Session):
    db.query(models.CNAB).delete()

def error_message(message):
    return {
        'error': message
    }