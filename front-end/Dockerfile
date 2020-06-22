FROM node:12.18.1

# RUN yarn global add webpack

WORKDIR /usr/src/app
COPY package.json /tmp/
RUN yarn config set registry http://registry.npmjs.org/ && yarn
COPY . .

CMD [ "yarn", "dev" ]
EXPOSE 8080
