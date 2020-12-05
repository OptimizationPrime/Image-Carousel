DROP TABLE listings;
DROP TABLE locations;
DROP TABLE images;
DROP TABLE users;
DROP TABLE favorites;

CREATE TABLE listings (
  id BIGSERIAL PRIMARY KEY,
  price BIGINT NOT NULL,
  roomCount INT NOT NULL,
  bathCount INT NOT NULL,
  sqft INT NOT NULL,
);

CREATE TABLE locations (
  id BIGSERIAL PRIMARY KEY,
  street VARCHAR(100) NOT NULL,
  unit VARCHAR(20),
  neighborhood VARCHAR(50),
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip INT NOT NULL,
  listingId BIGINT NOT NULL,
  FOREIGN KEY(listingId)
    REFERENCES listings(id
);

CREATE TABLE images (
  id BIGSERIAL PRIMARY KEY,
  url VARCHAR(1000) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  listingId BIGINT NOT NULL,
  FOREIGN KEY(listingId)
    REFERENCES listings(id)
);

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
);

CREATE TABLE FAVORITES (
  id BIGSERIAL PRIMARY KEY,
  userId BIGINT NOT NULL,
  listingId BIGINT NOT NULL,
  FOREIGN KEY(userId, listingId)
    REFERENCES user(id) listings(id)
);