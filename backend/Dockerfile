FROM node:16

MAINTAINER Rahul Raval

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm" , "run" , "dev"]