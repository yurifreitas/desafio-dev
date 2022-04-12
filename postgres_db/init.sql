CREATE TABLE public.cnab(
    id SERIAL PRIMARY KEY,
    transact_type varchar(50),
    transact_value varchar(50),
    transact_date varchar(50),
    dono_loja varchar(50),
    nome_loja varchar(50),
    transact_card varchar(50),
    cpf varchar(50),
    transact_time varchar(50)
);