# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm install --quiet
COPY . ./
RUN NODE_ENV=development npm run build

# production stage
FROM nginx:stable as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80 8080 443
CMD ["nginx", "-g", "daemon off;"]