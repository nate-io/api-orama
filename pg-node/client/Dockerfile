# Use the official image as a parent image.
FROM node:current-slim

# create & set image filesystem working directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Copy the file from your host to your current location
COPY package*.json ./

#  install deps inside image filesystem quietly
RUN npm ci -qy

# copy source code from host to image filesystem
COPY . .

# declare container's internal port 
EXPOSE 3000

# runtime command to exec
CMD ["npm", "start"]