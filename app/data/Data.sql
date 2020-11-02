USE dsproject;

create table Members(
      Member_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
      First_Name VARCHAR(25),
      Last_Name varchar(25),
      Gender varchar(10),
      Date_of_Birth varchar(10),
      Email Varchar(100),
      Address Varchar(100),
      Position_Name varchar(50),
      Start_Date Varchar(10),
      Member_Status Varchar(10),
      Radio_Number varchar(20)
);

create table Station(
      Station_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
      Station_Number varchar(10)
      );

Create table Certification(
     Certificate_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
     Title varchar (50),
     Agency Varchar(20),
     Expire_Date varchar (10)
);

Create table Association(
    Member_ID Varchar(20),
    Certificate_ID varchar(20),
    primary key (Certificate_ID, Member_ID)
);


INSERT INTO Members (First_Name, Last_Name, Gender, Date_of_Birth, Email, Address, Position_name, Start_Date, Member_Status, Radio_Number) VALUES
("Cristiano", "Ronaldo", "M",  "1985-02-05", "cronaldo@juventus.com", "1730 Best Player Ave", "Captain", "2003-12-21", "Active", "1"),
("Lionel", "Messi", "M",  "1987-06-24", "lmessi@FCBarcelona.com", "1620 Great Player St", "Battalion Chief", "2004-10-15", "Active", "2");


INSERT INTO Station (Station_Number) VALUES
("10"),
("20"),
("30");


INSERT INTO Certification (Certificate_ID, Title, Agency, Expire_Date) VALUES
("1","FireSystem", "Red Cross", "2022-09-01"),
("2", "FireStrategy", "Red Cross", "2023-12-15"),
("3", "Emergency Medical Responder", "Red Cross", "2022-01-31");

USE dsproject;
ALTER TABLE Members
ADD Phone varchar(30),
ADD Station_Number Int(11),
ADD Certification varchar(50);

USE dsproject;
Insert into Members(Phone, Station_Number, Certification) Values
("317-589-7856", 26, "FireSystem");

USE dsproject;

Create table Association(
     Association_ID INT PRIMARY KEY AUTO_INCREMENT,
     First_Name varchar (50),
     Last_Name Varchar(20),
     Certification varchar (50),
     Expire_Date varchar(20),
     Member_ID int,
     Foreign key (Member_ID) references Members(Member_ID)
);
