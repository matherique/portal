FROM node:11.13.0-alpine

WORKDIR /usr/src/service.serssion

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "run", "dev" ]