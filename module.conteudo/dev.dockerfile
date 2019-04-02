FROM node:11.13.0-alpine

WORKDIR /usr/src/module.conteudo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "run", "dev" ]
