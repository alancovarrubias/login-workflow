FROM node:14.4.0

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]