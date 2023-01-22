FROM node:16.13.0-alpine3.12
ENV NODE_VERSION 14.18.1
WORKDIR /app
COPY ./app /app
EXPOSE 3000

RUN apk update && \
    npm install -g npm \
    npm install -g firebase-tools \
    && rm -rf /var/lib/apt/lists/*
    
User node
ENV CI=true
