FROM nginx
MAINTAINER agung <agung.julisman@yahoo.com>

RUN mkdir -p /etc/nginx/conf.d

RUN rm -f /etc/nginx/nginx.conf

ADD templates/config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443