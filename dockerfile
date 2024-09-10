# build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --quiet
COPY . ./
RUN chown -R app /app
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]