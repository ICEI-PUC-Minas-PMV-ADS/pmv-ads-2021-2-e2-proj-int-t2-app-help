<?php
$servername = "ec2-34-235-152-111.compute-1.amazonaws.com";
$username = "site";
$password="gerald";
// try {
//   $conn = new PDO("mysql:host=$servername;dbname=heroku_def7e712d450d2e?", $username,$password);
//   // set the PDO error mode to exception
//   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   echo "";
// } catch(PDOException $e) {
//   echo "Connection failed: " . $e->getMessage();
// }

// try to connect to db or catch exceptions
$connection_string = "mysql:host=" . $servername . ":" . 3306 . ";dbname=site" ;
$conn = null;

// show connection string
// echo $connection_string."</br>";

// try to connect to db or catch exceptions
try{
    $conn = new PDO( $connection_string, $username, $password );
}catch (PDOException $exc){
    echo '<pre>';
    print_r($exc);
    echo '</pre>';
};

?>