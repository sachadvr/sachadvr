<html>

<head>
<link rel="stylesheet" href="./css/links.css">
</head>

<body>
    <center>
        <?PHP
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $recipient = 'contact@sachadvr.fr';

            $nom = $_POST['nom'];
            $sender = $_POST['email'];
            $tel = $_POST['tel'];
            $message = $_POST['message'];

            $finalmessage = "<html><h1>Formulaire:</h1> <p><strong>Nom: </strong> {$nom}</p>
    <p><strong>email: </strong>  {$sender}</p>
    <p><strong>Tel: </strong> {$tel}</p>
    <p><strong>Message: </strong> {$message} </p></html>";
            $finalmessage = $finalmessage;
            $subject = '=?UTF-8?B?' . base64_encode("sachadvr.fr : formulaire de contact") . '?=';
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
            $headers .= "From: no-reply@sachadvr.fr" . "\r\n";
            $headers .= "Reply-To: contact@sachadvr.fr" . "\r\n" .
                'X-Mailer: PHP/' . phpversion();


            if (mail($recipient, $subject, $finalmessage, $headers)) {
                echo "<p style='margin: 40px 0;'><img src='https://www.sachadvr.fr/images/sent.svg' width='107px' height='107px' /></p>
                    <p><strong>Votre message a bien &eacute;t&eacute; envoy&eacute; &agrave; SachaDVR</strong></p>
                    <p>Vous allez &ecirc;tre redirig&eacute; dans 3secondes vers <a style='text-decoration: none; color: orange;' href='https://wwww.sachadvr.fr'>sachadvr.fr</a></p>";
                header("Refresh: 3;URL=index.html");
            } else {
                echo "Une erreur est survenue, veuillez réessayer plus tard!";
            }
        }?>
    </center>
</body>

</html>