DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT PRIMARY KEY,
department_name VARCHAR(30)
);

CREATE TABLE employee_role (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL (10,2) DEFAULT 0 NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT
);