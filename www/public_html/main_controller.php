<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "domyfun";


// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else if (!isset($_SESSION['connected'])) {
    $_SESSION['connected'] = TRUE;
}


if (strpos($_SERVER['REQUEST_URI'], "hotels") > 0) {
    $hotels_sql = "SELECT * FROM hotels";
    $_hotels = $conn->query($hotels_sql);
} else if (strpos($_SERVER['REQUEST_URI'], "tours") > 0) {
    $tours_sql = "SELECT * FROM tours";
    $_tours = $conn->query($tours_sql);
}
