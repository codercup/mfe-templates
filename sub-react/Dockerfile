# dockerfile
# build stage
FROM hub.c.163.com/library/node as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --registry https://registry.npm.taobao.org
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
