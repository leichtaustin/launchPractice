CREATE DATABASE todolaunch;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos (id, user_email, title, progress, date) VALUES (0, 'tom@test.com', 'First To Do', 10, 'Thu Sep 6 2023');