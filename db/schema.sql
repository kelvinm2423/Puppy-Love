CREATE DATABASE puppylove;

 USE puppylove;

 CREATE TABLE puppy(
   item_id INT AUTO_INCREMENT NOT NULL,
   breed VARCHAR(45) NOT NULL,
   age DECIMAL(20) NOT NULL,
   gender VARCHAR(45) NOT NULL,
   image varchar(500) NOT NULL,
   ownerFirstName varchar(100) NOT NULL,
   ownerLastName varchar(100) NOT NULL,
   ownerEmail varchar(200) NOT NULL,
   ownerAddress varchar(200) NOT NULL,
   ownerCity varchar(100) NOT NULL,
   ownerState varchar(50) NOT NULL,
   ownerZipcode varchar(5) NOT NULL,
   primary key(item_id)
  );

select * from puppy;

INSERT INTO puppy (breed, age, gender, image, ownerFirstName, ownerLastName, ownerEmail, ownerAddress, ownerCity, ownerState, ownerZipcode)
  VALUES ("Pitbull", 2, "male", "http://bit.ly/2sB7uw6", "Bob", "Smith", "bob@gmail.com", "1234 SW 34th St.", "New York", "NY" , 10012),
    ("Shih-Tzu", 6, "female", "http://bit.ly/2sB7FaK", "Jessica", "Garcia", "jessica@yahoo.com", "45 NW 4th Blvd.", "Chicago", "IL" , 60018),
    ("Golden Retriever", 8, "male", "http://bit.ly/2s4us2a", "Carlos", "Robinson", "cr17@gmail.com", "678 W 24th Ave.", "Phoenix", "AZ" , 85001),
    ("German Shepard", 10, "female", "http://bit.ly/2rQiLfy", "Abby", "Rauss", "abbyrauss@yahoo.com", "900 S 54th St.", "Miami", "FL" , 33018),
    ("English Bulldog", 5, "male", "http://bit.ly/2s4LXPX", "Sam", "Cheeks", "sammyc@aol.com", "1000 NE 96th Ct.", "Los Angeles", "CA" , 90007),
    ("Yorkie", 7, "female", "http://bit.ly/2g8Xa8Y", "Jack", "Redshield", "jredshield@gmail.com", "4321 SW 110th Blvd.", "Sacramento", "CA" , 94203); 


  