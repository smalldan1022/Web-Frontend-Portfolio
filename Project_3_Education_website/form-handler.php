<?php

$name = $_POST["name"];
$visiter_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$email_from = "info@yourwebsite.com";

$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".
              "User email: $visiter_email.\n".
              "User Subject: $subject.\n".
              "User Message: $message.\n";

$to = "asign1022@gmail.com";

$headers = "From: $visiter_email \r\n";

$headers .="Reply-to: $visiter_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");

?>