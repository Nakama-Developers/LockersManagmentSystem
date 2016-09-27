<?php 
    require 'connection.php';

    $lockersQuery = 'SELECT Locker_Num, Locker_Status, comment FROM lockers';
    $lockersResult =  mysqli_query($conn, $lockersQuery);
    $lockersDataArray = array();
    while($lockersDataArraySQL = mysqli_fetch_array($lockersResult)){
       array_push($lockersDataArray,$lockersDataArraySQL);
    }
    echo json_encode($lockersDataArray);

?>

