#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE dados;
	GRANT ALL PRIVILEGES ON DATABASE dados TO $POSTGRES_USER;
EOSQL