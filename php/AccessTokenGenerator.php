<?php

class GenerateAccessToken {

    private $apiKey;
    private $secretKey;

    public function __construct($apiKey, $secretKey) {
        $this->apiKey = $apiKey;
        $this->secretKey = $secretKey; 
    }

    public function getAccessToken(){

        // $API_Key = "MK_TEST_KWB4J5FHZN";
        // $Secret_Key = "Q4PFEVJWE1YFAHFVDP1QQX8SGYGAVUM5";

        $ch = curl_init();
                        
        $headers = array(
        'Content-Type:application/json',
        'Authorization: Basic '. base64_encode($this->apiKey . ":" . $this->secretKey) 
        );
        curl_setopt($ch, CURLOPT_CAINFO, '../../../../../../ca certificate/cacert-2023-12-12.pem');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_URL,"https://sandbox.monnify.com/api/v1/auth/login");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    
        $output = curl_exec($ch);
                    
        curl_close($ch);
                    
        $json = json_decode($output, true);
                    
        return $json['responseBody']['accessToken'];
    }
}

?>