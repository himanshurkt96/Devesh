
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

COPY certificates/server.crt /etc/nginx/certificates/localhost.crt
COPY certificates/server.key /etc/nginx/certificates/localhost.key

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
