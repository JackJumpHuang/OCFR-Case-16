<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Certification SET Title=?, Agency=?, Expire_Date=?
   WHERE Certificate_ID = ?;'
);

$stmt->execute([
  $_POST['Title'],
  $_POST['Agency'],
  $_POST['Expire_Date'],
  $_POST['Certificate_ID']
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../certification/?Certificate_ID=' . $pk);
