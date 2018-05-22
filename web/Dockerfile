FROM node:carbon

RUN mkdir -p /usr/src/web/logs/

# Create app directory
WORKDIR /usr/src/web/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 4200
CMD [ "npm", "start" ]