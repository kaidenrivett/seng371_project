FROM node:19-alpine

RUN mkdir /app

COPY ./package-lock.json /app
COPY ./package.json /app

WORKDIR /app

RUN npm ci

COPY . /app

CMD [ "npm", "run", "dev" ]
