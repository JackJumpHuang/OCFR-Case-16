<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class  WHERE (CONVERT(varchar(10),Expire_Date,102) - CONVERT(varchar(10),GETDATE(),102)) < 0 ';
$db = DbConnection::getConnection();

$sql = 'SELECT *
        FROM Association';

$vars = [];

if (isset($_GET['Association_ID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Association WHERE Association_ID = ?';
  $vars = [ $_GET['Association_ID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$lists = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($lists, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
