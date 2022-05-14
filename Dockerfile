FROM nginx:stable-alpine
MAINTAINER mangomei
ADD docs/.vuepress/dist/ /usr/share/nginx/html/plan/
EXPOSE 80