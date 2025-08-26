FROM node:20.15-alpine3.20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run prisma:generate

EXPOSE 9000

CMD ["npm", "run", "dev"]
