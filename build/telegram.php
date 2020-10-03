<?php

/* https://api.telegram.org/bot1386372246:AAEOofZU9-H2Kk8SN-bgG2pXRKO7OS9Q5uo/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$message = $_POST;
$token = "1386372246:AAEOofZU9-H2Kk8SN-bgG2pXRKO7OS9Q5uo";
$chat_id = "-352069961";
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");

?>