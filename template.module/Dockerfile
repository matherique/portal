FROM node:11.13.0-alpine

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm", "run", "dev" ]