FROM nginx
MAINTAINER agung <agung.julisman@yahoo.com>

RUN mkdir -p /etc/nginx/conf.d

RUN rm -f /etc/nginx/nginx.conf

ADD default.conf /etc/nginx/nginx.conf

#RUN mkdir -p /var/www/php/website


EXPOSE 80
EXPOSE 443