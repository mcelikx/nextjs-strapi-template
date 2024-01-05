FROM node:18-bullseye-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

# CMD [ "yarn", "buildAndStart" ]
CMD [ "yarn", "dev" ]