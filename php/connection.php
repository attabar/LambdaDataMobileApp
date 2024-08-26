<?php

class Connection {

    private $host;
    private $username;
    private $password;
    private $dbname;
    private $conn;
    

    public function __construct($host,$username,$password,$dbname) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;   
    }

    public function connect(){

        // Attempt to establish connection
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbname);

        // check for database connection
        if($this->conn->connect_error){
            $error = "Connection Failed: " . $this->conn->connect_error;
            return $error;
        }
        return $this->conn;
    }
}
$host = "localhost";
$username = "root";
$password = "";
$dbname = "mk_yamboy";

$connection = new Connection($host,$username,$password,$dbname);
$conn = $connection->connect();
?>