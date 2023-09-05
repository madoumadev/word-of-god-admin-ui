# Build from base image
FROM node:alpine as build-stage

# Define working directory
WORKDIR /app

# Copy project
COPY . .

# Install dependencies
RUN yarn install && yarn build

#
FROM nginx:stable

#Copy the nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]




