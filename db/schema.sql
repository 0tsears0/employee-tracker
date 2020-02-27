DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
name VARCHAR(30),
id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INT NOT NULL,
PRIMARY KEY (id),
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
id INT NOT NULL,
PRIMARY KEY (id),
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT
);