<?php
$servername = "us-cdbr-east-04.cleardb.com";
$username = "b3589cdb8a0bdc";
$password="64a27bfe";
try {
  $conn = new PDO("mysql:host=$servername;dbname=heroku_def7e712d450d2e?", $username,$password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}


?>