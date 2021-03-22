#設定一個基本的映像，FROM 後面是映像的名字，這個映像是 Docker 官方提供的，這個映像裡面包含了 Node.js，可以在node後跟冒號 申明東映像版本。as builder 是給它起了個別名
FROM node as builder
#WORKDIR 指令設定了工作目錄的位置，意思就是進入到 /usr/src/app 這個目錄，然後要在這個目錄裡去做一些事情。這裡的目錄是在映像裡的一個位置。
WORKDIR /usr/src/app

#COPY 指令可以複製本地主機上的檔案到映像裡，第一個點指的是 Dockerfile 檔案所在的目錄，這個目錄是本地主機上的位置。第二個點指的是映像裡的當前目錄，因為之前用 WORKDIR 設定了工作目錄的位置，所以第二個點在這裡指的就是映像裡的 /usr/src/app 這個目錄。

#這一步做的事情就是把在本地上的 Angular 應用複製到映像裡面。
COPY . .
#執行了一下 npm install 命令，也就是安裝 Angular 專案需要的所有的東西
RUN npm install
#它執行的是 ng build -c dotnet_core_docker，作用就是構建一個適合在生產環境上執行的 Angular 應用
RUN npm run docker
#這裡的nginx版本可以去掉 就會下載 latest
FROM nginx
#NiCatApp build在dist下生成的目錄 一般是你的專案名稱
COPY --from=builder /usr/src/app/dist/NiCatApp /usr/share/nginx/html
#設定使用者標籤
LABEL maintainer="LYM"
#這是將你配置好的nginx配置替換docker裡預設的nginx 建議學習nginx
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf