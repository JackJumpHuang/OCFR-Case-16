<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM Certification WHERE Certificate_ID = ?;'
);

$stmt->execute([
  $_POST['Certificate_ID'],
]);
