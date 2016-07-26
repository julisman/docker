FROM secret06/nodejs:3.0

MAINTAINER agung.julisman@yahoo.com

RUN git clone https://github.com/julisman/ecommerce.git /ecommerce/
RUN cp -R /ecommerce/* /app/

COPY .env .

RUN npm install --production




