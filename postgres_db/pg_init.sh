#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE dados;
	GRANT ALL PRIVILEGES ON DATABASE dados TO $POSTGRES_USER;
    CREATE TABLE cnab(
        id SERIAL PRIMARY KEY,
        type varchar(50),
        value varchar(50),
        date varchar(50),
        dono_loja varchar(50),
        nome_loja varchar(50),
        card varchar(50),
        cpf varchar(50),
        time varchar(50)
    );    
EOSQL