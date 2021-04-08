FROM node as builder
WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm run java_docker

FROM nginx
COPY --from=builder /usr/src/app/dist/NiCatApp /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf