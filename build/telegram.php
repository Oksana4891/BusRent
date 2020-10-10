<?php

$token = "1386372246:AAEOofZU9-H2Kk8SN-bgG2pXRKO7OS9Q5uo";
$chat_id = "-352069961";
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phone = $_POST['user_tel'];
$type = $_POST['type-call'];
$city = $_POST['city'];
$class = $_POST['class-bus'];
$size = $_POST['size-bus'];
$service = $_POST['service'];
$passengers = $_POST['count of passengers'];
$distance = $_POST['distance'];
$dey = $_POST['deys'];
$text = $_POST['text'];


$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email:' => $email,
    'Позвонить по:' => $type,
    "Город отправления:" => $city,
    "Класс автобуса:" => $class,
    "Размер автобуса:" => $size,
    "Вид услуг:" => $service,
    "Количество пассажиров:" => $passengers,
    "Дистанция, км.:" => $distance,
    "Количество дней:" => $dey,
    "Текст:" => $text
  );
  
  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
