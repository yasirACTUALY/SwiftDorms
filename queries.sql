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

-- apartment_listings table to store data from form of apartment listings
CREATE TABLE apartment_listings (
    listing_id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    description TEXT,
    rent DECIMAL(10, 2) NOT NULL,
    num_bedrooms INT,
    num_bathrooms INT,
    sq_ft INT,
    availability ENUM('available', 'not available') NOT NULL,
    contact_info VARCHAR(255)
);