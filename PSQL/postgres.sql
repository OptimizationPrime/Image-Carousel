-- schema.sql
--
DROP DATABASE IF EXISTS trulia;
CREATE DATABASE trulia;
USE trulia;

CREATE TABLE listings (
  listing_id BIGSERIAL PRIMARY KEY,
  price BIGINT NOT NULL,
  bed INT NOT NULL,
  bath INT NOT NULL,
  sqft INT NOT NULL,
  homeAddress VARCHAR(100) NOT NULL,
  neighborhood VARCHAR(50),
  imageURL VARCHAR(1000) NOT NULL
);

CREATE TABLE user_favorites (
  user_id BIGSERIAL PRIMARY KEY,
  username VARCHAR (50) NOT NULL,
  listing_id INT,
  FOREIGN KEY ( listing_id ) REFERENCES listings( listing_id )
);

