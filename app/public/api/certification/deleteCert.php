<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM Certification WHERE Certificate_ID = ?;'
);

$stmt->execute([
  $_POST['Certificate_ID']
]);
