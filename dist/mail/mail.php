<?php
$recepient = "info@spctrm.xyz";
$siteName = "Spectrum";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["message"]);
$message = "Name: $name \nEmail: $email \nMessage: $msg";
$pagetitle = "Feedback \"$siteName\"";
mail($recepient, 'Spectrum ', $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>