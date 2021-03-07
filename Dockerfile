FROM node:15.11.0-stretch
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 50051
USER 1000:1000
CMD [ "npm", "start" ]

