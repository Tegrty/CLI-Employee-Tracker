-- Payload to inject into the database

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Human Resources'),
    ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 135000, 4),
    ('Lawyer', 120000, 4),
    ('HR Lead', 130000, 5),
    ('HR Representative', 110000, 5),
    ('The Big Cheese', 2000000, NULL),
    ('Marketing Lead', 135000, 6),
    ('Marketing Representative', 110000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sal', 'Hobbi', 10, NULL),
    ('Vasily', 'Likhovaydo', 1, 1),
    ('Lee', 'Zhang', 2, 2),
    ('Mark', 'Alfano', 3, 1),
    ('Michael', 'Frayne', 4, 4),
    ('Kirk', 'Hagglund', 5, 1),
    ('Taddeo', 'Costanzo', 6, 1),
    ('Rebecca', 'Lawrence', 7, 7),
    ('Mozhdeh', 'Khorashahi', 8, 1),
    ('Wing', NULL, 9, 9),
    ('Mariah', 'Feser', 11, 1),
    ('John', 'Abounassar', 12, 11);

