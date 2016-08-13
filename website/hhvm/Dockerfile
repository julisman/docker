# Set the base image to Ubuntu
FROM ubuntu:trusty

# File Author / Maintainer
MAINTAINER Agung Julisman <agung.julisman@yahoo.com>

# Install HHVM
RUN apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449
RUN apt-get update -y && apt-get install -y software-properties-common \
  && add-apt-repository "deb http://dl.hhvm.com/ubuntu trusty main" \
  && apt-get update -y \
  && apt-get install -y hhvm=3.14.4~trusty \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Add all config hhvm
ADD hhvm.ini /etc/hhvm/hhvm.ini
ADD php.ini /etc/hhvm/php.ini
ADD supervisor-hhvm.sh /scripts/supervisor-hhvm.sh

# Starts HHVM for the first time
RUN update-rc.d hhvm defaults

# Exposing HHVM-FastCGI port
EXPOSE 9000