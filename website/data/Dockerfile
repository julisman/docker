FROM ubuntu:trusty

MAINTAINER agung.julisman@yahoo.com

ENV USER sidikriyan
ENV PASSWORD ralali2016

# update
RUN apt-get update && apt-get install -y \
    curl \
    git \
    php5-cli \
    mcrypt \
    php5-mcrypt \
    php5-curl

RUN  php5enmod mcrypt

RUN curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

#RUN git clone https://sidikriyan:ralali2016@github.com/ralali/website.git /website/
RUN git clone https://${USER}:${PASSWORD}@github.com/ralali/website.git /website/

RUN mkdir -p /var/www/php/website
RUN cp -R /website/* /var/www/php/website

WORKDIR /var/www/php/website

RUN composer install --no-dev

COPY .env .
COPY config.js public/javascript/
COPY constants.php config/

RUN chown -R :www-data /var/www/php/website

VOLUME /var/www/php/website

CMD ["bash"]



