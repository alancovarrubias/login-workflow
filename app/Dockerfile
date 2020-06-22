FROM node:12.18.1

RUN yarn global add webpack

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn config set registry http://registry.npmjs.org/ && yarn

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN yarn build

CMD [ "yarn", "dev" ]
EXPOSE 8080
