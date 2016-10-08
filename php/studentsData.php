<?php 
    require 'connection.php';
    
    $studentID = $_GET['studentID'];
    $studentsInfoQuery = "SELECT * FROM students WHERE Student_ID = '$studentID'";
    $studentsResult = mysqli_query($conn,$studentsInfoQuery);
    $studentsDataArray = array();
    while($studentsDataArraySQL = mysqli_fetch_array($studentsResult)){
       array_push($studentsDataArray,$studentsDataArraySQL);
    }
    echo json_encode($studentsDataArray);
    




    
    
    /*
    $studentsQuery = 'SELECT * FROM lockers_owners';
    $studentsResult = mysqli_query($conn,$studentsQuery);
    $studentsDataArray = array();
    while($studentsDataArraySQL = mysqli_fetch_array($studentsResult)){
       array_push($studentsDataArray,$studentsDataArraySQL);
    }
    echo json_encode($studentsDataArray);
    */

?>

