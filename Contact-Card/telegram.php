<?php

/* https://api.telegram.org/bot1327263979:AAHda0pQkgYNjzuqmHrZNP7BNsPGnkUNkbA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
//$email = $_POST['email'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "1327263979:AAHda0pQkgYNjzuqmHrZNP7BNsPGnkUNkbA";
$chat_id = "-1001152956657";
$arr = array(
    'Имя: ' => $name,
    'Email: ' => $email,
    'Сообщение: ' => $message,
    //'Email' => $email
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    echo '<script>alert("Thanks you!");</script>';
    header('Location: /index.html');
} else {
    echo '<script>alert("Error");</script>';
}
