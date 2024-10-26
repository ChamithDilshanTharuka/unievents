-- CREATE DATABASE unievents;

use unievents;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    start_time DATETIME,
    end_time DATETIME,
    location VARCHAR(255),
    fee DECIMAL(10, 2),
    capacity INT,
    registration_link VARCHAR(255),
    description TEXT,
    image_url VARCHAR(255)
);