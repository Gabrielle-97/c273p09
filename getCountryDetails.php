<?php
include "dbFunctions.php";
// SQL query returns multiple database records.
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM statistics WHERE id = '$id'";
    $result = mysqli_query($link, $query);

    while ($row = mysqli_fetch_assoc($result)) {
        $statistics[] = $row;
    }
    mysqli_close($link);

    echo json_encode($statistics);
    
/*PHP Debugging
to print an array i : print_r($statistic);
print_r() is to print array from the database
Ajax Debugging 
console.log("you can type anything you want here");*/
}
?>
