CREATE DATABASE puppylove;

USE puppylove;

CREATE TABLE dogs(
  item_id INT AUTO_INCREMENT NOT NULL,
  breed VARCHAR(45) NOT NULL,
  age DECIMAL(20) NOT NULL,
  sex VARCHAR(45) NOT NULL,
  primary key(item_id)
);

select * from dogs;

INSERT INTO dogs (breed, age, sex)
VALUES ("Pitbull", 2, "male"),
  ("Shih-Tzu", 6, "female"),
  ("Golden Retriever", 8, "male"),
  ("German Shepard", 10, "female"),
  ("English Bulldog", 5, "male"),
  ("Yorkie", 7, "female");

CREATE TABLE humans(
  item_id INT AUTO_INCREMENT NOT NULL,
  human_name VARCHAR(45) NOT NULL,
  zipcode DECIMAL(5) NOT NULL,
);

select * from humans;

INSERT INTO humans (human_name, zipcode)
VALUES ("John", 33071),
  ("Bob", 33065),
  ("Sarah", 33018),
  ("Linda", 33132),
  ("Adam", 33004),
  ("Josh", 33009);

