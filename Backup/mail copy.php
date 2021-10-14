<?PHP
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = 'contact@sachadvr.fr';

    $nom = $_POST['nom'];
    $sender = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $finalmessage = "<html><head><link rel='stylesheet' href='https://www.sachadvr.fr/mail.css'></head>
        <div class='container'>
            <h1>Formulaire:</h1> 

    <p><strong>Nom: </strong>" .$nom. "</p><p><strong>email: </strong>". $sender ."</p>
    <p><strong>Tel: </strong>".$tel. "</p><p><strong>Message: </strong>$message</p></div></html>";

    $subject = '=?UTF-8?B?'.base64_encode("sachadvr.fr : formulaire de contact").'?=';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .='Content-Transfer-Encoding: 8bit'."\r\n" ;
    $headers .= "From: no-reply@sachadvr.fr"."\r\n";
    $headers .= "Reply-To: contact@sachadvr.fr"."\r\n".
    'X-Mailer: PHP/' . phpversion();
    

    if (mail($recipient, $subject, $finalmessage, $headers)) {
        echo '<html><head><link rel="stylesheet" href="mail.css"></head><body><div class="container"><h1>Mail envoyé! </h1> <p>Votre message a bien été envoyé à SachaDVR<br></p>';

        echo '<p>Vous allez être redirigé dans 5secondes vers <a href="https://www.sachadvr.fr">sachadvr.fr</a></p></div></body></html>';
         header ("Refresh: 5;URL=index.html");
    } else {
        echo 'Une erreur est survenue, veuillez réessayer plus tard!';
    }
}
