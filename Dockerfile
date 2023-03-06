FROM node:18-alpine

COPY ./.devcontainer/.ssh/* /root/.ssh/
RUN chmod 400 /root/.ssh/*

COPY . /app
WORKDIR /app