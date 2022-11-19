FROM node:16.13.0-alpine3.12
ENV NODE_VERSION 14.18.1
WORKDIR /app
COPY ./app /app
EXPOSE 3000
User node
ENV CI=true
