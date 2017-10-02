# nos basamos en la imagen de node version 8
# la busca en local si no la encuentra la descarga de DockerHub
FROM 172.16.2.81:8082/node:8
MAINTAINER mbouanane@kiloutou.fr

# Directorio de trabajo dentro del container 
#WORKDIR /app
# Copiar el contenido de la carpeta local (fisica del host) 
# => en el directorio actual del container (app en este caso por ls definición anterior WORKDIR)
#ADD . /app
# COPY test-login-2/ .
# parecido al anterior ADD . /app 
#EXPOSE 3001
#VOLUME /kiloutou/data

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    libaio1 \
    build-essential \
    unzip \
    curl \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p opt/oracle

ADD ./oracle/linux/ .

RUN unzip instantclient-basic-linux.x64-12.2.0.1.0.zip -d /opt/oracle \
  && unzip instantclient-sdk-linux.x64-12.2.0.1.0.zip -d /opt/oracle  \
  && mv /opt/oracle/instantclient_12_2 /opt/oracle/instantclient \
  && ln -s /opt/oracle/instantclient/libclntsh.so.12.1 /opt/oracle/instantclient/libclntsh.so \
  && ln -s /opt/oracle/instantclient/libocci.so.12.1 /opt/oracle/instantclient/libocci.so

ENV LD_LIBRARY_PATH="/opt/oracle/instantclient"
ENV OCI_HOME="/opt/oracle/instantclient"
ENV OCI_LIB_DIR="/opt/oracle/instantclient"
ENV OCI_INCLUDE_DIR="/opt/oracle/instantclient/sdk/include"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN echo '/opt/oracle/instantclient/' | tee -a /etc/ld.so.conf.d/oracle_instant_client.conf && ldconfig

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ADD .npmrc package.json /usr/src/app/
RUN npm install
#&& npm cache clean --force
ADD . /usr/src/app

#RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]