FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD=admin123
ENV MYSQL_DATABASE=tienda_perritos
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
