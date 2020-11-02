<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$sql = 'SELECT Members.First_Name, Members.Last_Name, Members.Member_ID, Association.Certificate_ID
        FROM Members, Association
        WHERE Members.Member_ID = Association.Member_ID';
$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certMembers = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certMembers, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
