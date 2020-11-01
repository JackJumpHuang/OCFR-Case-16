<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Members SET First_Name=?, Last_Name=?, Gender=?, Date_of_Birth=?, Email=?, Address=?,Position_Name=?, Start_Date=?, Member_Status=?, Phone=?, Station_Number=?, Radio_Number=?, Certification=?
   WHERE Member_ID = ?;'
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
  $_POST['Certification'],
  $_POST['Member_ID']
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../Members/?Member_ID=' . $pk);
