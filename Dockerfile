FROM node:lts-alpine

ENV NPM_CONFIG_LOGLEVEL warn

# Set Working Directory 
WORKDIR /app
# Copy only package.json and yarn.lock for cache
COPY package*.json yarn*.lock ./
# Install Dependencies and set time out
RUN yarn install --pure-lockfile --network-timeout 1500000
# Copy all the files
COPY . .
# Build the SPA
RUN yarn build
# Run the api
CMD [ "yarn", "prod" ]
