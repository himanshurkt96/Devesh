
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/


COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/ssl

COPY ssl/self-signed.crt /etc/nginx/ssl/self-signed.crt
COPY ssl/self-signed.key /etc/nginx/ssl/self-signed.key


EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
