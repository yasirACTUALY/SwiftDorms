-- create a new database for the project call swift dorms
CREATE DATABASE SwiftDorms;

-- make a new table in SwiftDorms
USE SwiftDorms;

-- user_data table to store user profile information
CREATE TABLE user_data (
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fname VARCHAR(50),
    lname VARCHAR(50),
    gender ENUM('male', 'female', 'other') NOT NULL
);
