<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
  <?php
   $header = "From: Testowe@@";
   $headers .= "Content-Type: text/html; charset=utf-8\r\n";
   $name = $_POST['name'];
   $to = 'email@example.ccom'
   $from = $_POST['email']
   $subject = $_POST['message'] . $_POST['phone'];
   $message = "Witaj to wiadomość testowa \n Odpowiedz na email:" . $from;
   mail($to, $subject, $message, $header);

   echo <p> Wiadomość wysłano, niedługo się z Tobą skontaktujemy ;) </p>
   ?>
</div>
</body>
</html>


