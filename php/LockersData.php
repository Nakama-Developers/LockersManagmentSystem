<?php 
    require 'connection.php';

    // getting the last locker number
    $lastLockerQuery = 'SELECT Locker_Num FROM Lockers';
    if($lastLockerResult =  mysqli_query($conn, $lastLockerQuery)){
        $rowCount=mysqli_num_rows($lastLockerResult);
        // echo $rowcount;
         // Free result set
         mysqli_free_result($lastLockerResult);
    }
    
    //Getting the student IDs to access the Student Table
    for($counter = 1; $counter <= $rowCount; $counter++){
        $occupationQuery = "SELECT Occupation FROM Lockers WHERE LOCKER_NUM = '$counter '";
        $occupationResult =  mysqli_query($conn, $occupationQuery);
        $studentIDsArraySQL = mysqli_fetch_array($occupationResult);
        $studentIDsArray[] = $studentIDsArraySQL[0];
    }
    // echo json_encode($studentIDsArray);

    // in this algorithm the array slot +1 will be the locker ID

    // getting the student Data
    for($counter = 0; $counter<$rowCount; $counter++){
        $studentQuery = "SELECT * FROM Students WHERE Student_ID = '$studentIDsArray[$counter]'";
        $studentResult =  mysqli_query($conn,$studentQuery);
        $studentInfoSQL = mysqli_fetch_array($studentResult);
        $studentInfoArray[] = json_encode($studentInfoSQL[0]);
        $studentInfoArray[] = json_encode($studentInfoSQL[1]);
        $studentInfoArray[] = json_encode($studentInfoSQL[2]);
        $studentInfoArray[] = json_encode($studentInfoSQL[3]);
    }
    echo  json_encode($studentInfoArray);

    // now if the user wants the Student who holds locker number 4 for an example so his information are stored inside array[4*3+1 ... 4*3+3]


?>

