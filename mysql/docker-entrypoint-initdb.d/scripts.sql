ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';

/****************/

flush privileges;

/****************/

CREATE TABLE people
(
    id int auto_increment,
    name varchar(255),
    PRIMARY KEY (id)
);