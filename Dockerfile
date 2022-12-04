# build environment
FROM node:lts-alpine as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM dependencies as build
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
