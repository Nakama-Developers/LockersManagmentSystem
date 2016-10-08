<?php 
    require 'connection.php';
    
    $numberOfNewLockers = $_POST['numNewLockers'];
    $numberOfLastLocker = $_POST[''];
    $newLockerID = $numberOfLastLocker++;
    
    $for($counter = 0; $counter<$numberOfNewLockers; $counter++){
        $query = "INSERT INTO lockers (Locker_Num, Owner, Type, Locker_Status, comment) VALUES ('$newLockerID','Null','Iron','Null')";
        mysqli_query($conn,$query);
        $newLockerID++;
    }

?>

