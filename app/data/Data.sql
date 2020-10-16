create table Members(
      Member_ID Varchar2(20),
      First_Name varchar2(25),
      Last_Name varchar2(25),
      Gender varchar2(10),
      Date_of_Birth varchar2(10),
      Email Varchar2(100),
      Address Varchar2(100),
      Position_Name varchar2(50),
      Start_Date Varchar2(10),
      Status Varchar2(10),
      Radio_Number varchar2(20),
      primary key (Member_ID)
);

create table Station(
      Station_Number varchar2(10),
      Member_ID Varchar2 (20),
      primary key (Station_Number, Member_ID)
      );

create table Phone(
      Member_ID Varchar2(20),
      Phone_Number Varchar2(13),
      primary key (Phone_Number, Member_ID)
);

create table Certification(
     Certificate_ID varchar2(20),
     Title varchar2 (20),
     Agency Varchar2(20),
     Expire_Date varchar2 (10),
     Status Varchar2 (10),
     primary key (Certificate_ID)
);

Create table own(
    Member_ID Varchar2(20),
    Certificate_ID varchar2(20),
    primary key (Certificate_ID, Member_ID)
);


INSERT INTO Members (Member_ID, First_Name, Last_Name, Gender, Date_of_Birth, Email, Address, Position_name, Start_Date, Status, Radio_Number) VALUES
("1", "Cristiano", "Ronaldo", "M",  "1985-02-05", "cronaldo@juventus.com", "1730 Best Player Ave", "Captain", "2003-12-21", "Active", "1"),
("2", "Lionel", "Messi", "M",  "1987-06-24", "lmessi@FCBarcelona.com", "1620 Great Player St", "Battalion Chief", "2004-10-15", "Active", "2");


INSERT INTO Station (Station_Number, Member_ID) VALUES
("A", "1"),
("A", "2"),
("B", "2");

INSERT INTO Phone (Member_ID, Phone_Number) VALUES
("1", "(812)963-1666"),
("1", "(284)176-9812"),
("2", "(288)165-0193");

INSERT INTO Certification (Certificate_ID, Title, Agency, Expire_Date, Status) VALUES
("10000", "FireSystem", "Red Cross", "2022-09-01",  "Valid"),
("10001", "FireStrategy", "Red Cross", "2023-12-15",  "Valid"),
("10002", "Emergency Medical Responder", "Red Cross", "2022-01-31",  "Valid");
