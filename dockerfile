# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm install --quiet
COPY . ./
RUN NODE_ENV=development npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]