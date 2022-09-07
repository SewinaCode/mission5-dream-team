FROM node:18-alpine3.15

RUN mkdir/app
WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["nmp", "start"]