FROM node:12

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package.json /usr/src/app/
RUN npm install

#bundle app source
COPY . /usr/src/app

EXPOSE 8000
CMD [ "node", "index.js" ]