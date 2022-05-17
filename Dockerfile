FROM node:14.16

WORKDIR /app/api
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]
