DROP TABLE IF EXISTS users;
CREATE TABLE users (
	uid SERIAL PRIMARY KEY,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(60) NOT NULL,
	username VARCHAR(50) NOT NULL
);

INSERT INTO users (email, password, username) 
VALUES ('test@test.com', '123456', 'Test1');

SELECT * FROM users;