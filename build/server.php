<?php
    {
    $to = "_____________";
    $subject = "Письмо с сайта Aренда автобусов";
    $message = echo var_dump($_POST);
    mail($to, $subject, $message);
    };