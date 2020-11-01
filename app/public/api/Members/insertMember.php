<?php

require 'common.php';

// Only need this line if we're creating GUIDs (see comments below)
//use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// As part of this step, create a new GUID to use as primary key (suitable for cross-system use)
// If we weren't using a GUID, allowing auto_increment to work would be best (don't pass `id` to `INSERT`)
//$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO Members (First_Name, Last_Name, Gender, Date_of_Birth, Email, Address,
    Position_Name, Start_Date, Member_Status, Phone, Station_Number, Radio_Number, Certification)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['First_Name'],
  $_POST['Last_Name'],
  $_POST['Gender'],
  $_POST['Date_of_Birth'],
  $_POST['Email'],
  $_POST['Address'],
  $_POST['Position_Name'],
  $_POST['Start_Date'],
  $_POST['Member_Status'],
  $_POST['Phone'],
  $_POST['Station_Number'],
  $_POST['Radio_Number'],
  $_POST['Certification']
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../Members/?Member_ID=' . $pk);
