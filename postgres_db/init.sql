DROP TABLE IF EXISTS public.cnab;
CREATE TABLE public.cnab(
    id SERIAL PRIMARY KEY,
    transact_type varchar(50),
    transact_value varchar(50),
    transact_date varchar(50),
    dono_loja varchar(50),
    nome_loja varchar(50),
    transact_card varchar(50),
    cpf varchar(50),
    transact_time varchar(50),
    time_created DATE NOT NULL DEFAULT CURRENT_DATE,
    time_updated DATE
);