USE employee_db;

INSERT INTO department
(department_name)
VALUES
("Emergency"),
("Radiology"),
("Neurology"),
("Office");

INSERT INTO employee_role
(title, salary, department_id)
VALUES
("MD", 250000, 1),
("Nurse", 80000, 1),
("Medical Scribe", 30000, 1),
("Hospital Director", 200000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
("Gregory", "House", 1, 2),
("Lisa", "Cuddy", 1, Null),
("Allison", "Cameron", 1, 1),
("Robert", "Chase", 1, 1),
("Eric", "Foreman", 1, 1);