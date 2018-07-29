FROM node:9.6.1

LABEL version="0.5"
LABEL description="Proyecto Mapa 1"
LABEL maintainer="Marco Franco - mfranc18@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /proyecto1
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start