FROM node:lts-alpine3.14

WORKDIR /app

COPY package.json .

#Caso precise limpar o cache para instalar pacotes
RUN npm cache clean --force  
RUN npm install --loglevel verbose

#permissão para funcionar reload
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3000


CMD ["npm", "start"]