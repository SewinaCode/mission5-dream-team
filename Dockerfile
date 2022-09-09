FROM node:18-alpine3.15

WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["nmp", "start"]
