<?php 
    require 'connection.php';
    $studentsQuery = 'SELECT * FROM lockers_owners';
    $studentsResult = mysqli_query($conn,$studentsQuery);
    $studentsDataArray = array();
    while($studentsDataArraySQL = mysqli_fetch_array($studentsResult)){
       array_push($studentsDataArray,$studentsDataArraySQL);
    }
    echo json_encode($studentsDataArray);


?>

