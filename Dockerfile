FROM nginx
ENV LANG=C.UTF-8
ENV TZ=Europe/Brussels
ENV DEBIAN_FRONTEND='noninteractive'
RUN apt-get update && apt-get -u dist-upgrade -y && apt-get autoremove -y
COPY favicon.* /usr/share/nginx/html/
COPY *.js /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/