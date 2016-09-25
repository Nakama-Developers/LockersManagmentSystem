<?php
    /**
     * PHP 5 
     *
     * @file
     *
     * Establish Connection with MySQL server
     **/

    $dbHost= 'localhost'; 
    $dbUser = 'root';
    $dbPass = '';
    $dbName = 'lockers_system';

    // connecting to the server
    $conn = mysqli_connect($dbHost, $dbUser, $dbPass); 

    // connecting to the database
    mysqli_select_db($conn ,$dbName); 

   /*  function checkConnection(){
        if (mysqli_connect_errno()) 
             echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }*/

?>