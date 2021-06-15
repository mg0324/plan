FROM nginx
MAINTAINER mangomei
ADD docs/.vuepress/dist/ /usr/share/nginx/html/plan/
EXPOSE 80