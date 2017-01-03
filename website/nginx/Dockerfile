FROM nginx
MAINTAINER Agung Julisman <agung.julisman@yahoo.com>

# change time zone to asia jakarta
RUN rm /etc/timezone \
       && echo "Asia/Jakarta" > /etc/timezone \
       && chmod 644 /etc/timezone \
       && dpkg-reconfigure --frontend noninteractive tzdata

RUN mkdir -p /etc/nginx/conf.d
RUN rm -f /etc/nginx/conf.d/default.conf

ADD nginx.conf /etc/nginx/
ADD website.conf /etc/nginx/conf.d/website.conf
ADD cms.conf /etc/nginx/conf.d/cms.conf

EXPOSE 80 443
