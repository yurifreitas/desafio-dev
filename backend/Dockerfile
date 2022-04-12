FROM python:3.9-alpine

ENV PYTHONBUFFERED 1

RUN apk update && \
    apk add --virtual build-deps gcc python3-dev musl-dev && \
    apk add postgresql-dev

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code

RUN pip3 install --upgrade pip


RUN pip3 install -r requirements.txt

RUN apk del build-deps

ADD ./app /code/app

ENV PYTHONPATH "${PYTHONPATH}:/code/app"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port","8000","--reload"]
