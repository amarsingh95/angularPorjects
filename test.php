<?php
header("content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$con=mysqli_connect('localhost','root','','angular');

if(mysqli_connect_error())
{
echo"Connection failed".mysqli_connect_error();
//Check MySOL Connection error
}else
{

$postdata=file_get_contents("php://input");

//get data from rquested url

    if(isset($postdata) && !empty($postdata))
   {///Check if Data is set or not

    $datalist=json_decode($postdata,true);
       
        foreach($datalist['data'] as $data)
        {
        $name=mysqli_real_escape_string($con,$data['name']);
        $lastname=mysqli_real_escape_string($con,$data['lastname']);
        $emailid=mysqli_real_escape_string($con,$data['emailid']);   
        $sql="insert into test(name,lastname,emailid)values('{$name}','{$lastname}','{$emailid}')";    
        $query=mysqli_query($con,$sql);
        ///Insert Datalist array as data 
        }

      echo json_encode($name);
   }else
    {
    echo"Data is not set";
    }

}


?>