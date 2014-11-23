/* CREATE DATABASE sentiment; */

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
	group_id SERIAL NOT NULL PRIMARY KEY,
	group_name VARCHAR(255) NOT NULL,
	group_latitude float,
	group_longitude float
);

CREATE TABLE users (
	user_id SERIAL NOT NULL PRIMARY KEY,
	consumer_id VARCHAR(255)
);

CREATE TABLE posts (
	post_id SERIAL NOT NULL PRIMARY KEY,
	post_text VARCHAR(255) NOT NULL,
	post_date timestamp with time zone NOT NULL,
	post_sentiment float NOT NULL,
	group_id int REFERENCES groups(group_id) NOT NULL,
	user_id int REFERENCES users(user_id)
);


