FROM node:carbon

# Create app directory
RUN mkdir -p /app/web

WORKDIR /app/web

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .
RUN ln -sf /app/node_modules /app/web/


EXPOSE 4200
CMD [ "npm", "start" ]


# RUN mkdir -p /app/web
# ENV NODE_PATH /app/node_modules
# WORKDIR /app/web
# COPY node_modules /app/node_modules