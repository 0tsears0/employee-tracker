DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
department_name VARCHAR(30),
id INT PRIMARY KEY
);

CREATE TABLE employee_role (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT
);