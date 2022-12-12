FROM node

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN nom i

COPY . /usr/src/app/

CMD ["npm", "run", "serve"]