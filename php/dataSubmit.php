<?php 
    require 'connection.php';
    
    $studentId = $_POST['studentId'];
    $fullName = $_POST['fullName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    

    $insertQuery = "INSERT INTO students (Student_ID, Name, Phone, Email) VALUES ('$studentId', '$fullName', '$phone', '$email')";

    if ($_POST['submitBtn']) 
        mysqli_query($conn, $insertQuery) or die(mysqli_error($conn));

         header('location: ../AdminPage.Html');
?>

