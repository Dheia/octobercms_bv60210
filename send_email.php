<?php
date_default_timezone_set('Europe/Prague');
include(__DIR__.'/phpmailer/mail.php');

$today = date('Y-m-d H:i:s');
$check = isset($_POST['check'])? $_POST['check'] : null;
$name = isset($_POST['name'])? $_POST['name'] : null;
$email = isset($_POST['email'])? $_POST['email'] : null;
$phone = isset($_POST['phone'])? $_POST['phone'] : null;
$message = isset($_POST['message'])? $_POST['message'] : null;

$date_created_1=date_create($today);
$date_created_1_echo=date_format($date_created_1,"d.m.Y");

if ($check == 4){

//send email
    $to = 'antoska.miroslav@gmail.com';

    $subject = "Kontaktný formulár - bv90210.sk";
    $body = "<p><b>Kontaktná osoba:</b> $name<br>
        <b>E-mail:</b> $email<br>
        <b>Telefón:</b> $phone<br>
        <b>Správa:</b> $message <br><br>
        Odoslané: $date_created_1_echo</p>";

    $mail = new Mail();
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('antoska.miroslav@gmail.com', 'BV90210.sk');
    $mail->addAddress($to);
    $mail->AddReplyTo($email);
    $mail->subject($subject);
    $mail->body($body);
    $mail->send();
    
    $to = 'predaj@38rk.sk';

    $subject = "Kontaktný formulár - bv90210.sk";
    $body = "<p><b>Kontaktná osoba:</b> $name<br>
        <b>E-mail:</b> $email<br>
        <b>Telefón:</b> $phone<br>
        <b>Správa:</b> $message <br><br>
        Odoslané: $date_created_1_echo</p>";

    $mail = new Mail();
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('antoska.miroslav@gmail.com', 'BV90210.sk');
    $mail->addAddress($to);
    $mail->AddReplyTo($email);
    $mail->subject($subject);
    $mail->body($body);
    $mail->send();


    header('location:index.php?message=send#kontakt');

} else{
    header('location:index.php?message=error#kontakt');
}
?>