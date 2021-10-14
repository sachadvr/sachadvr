<?php

 

   // Test fonction mail();

 

   // *** A configurer

 

   $to    = "contact@sachadvr.fr";

 

   // adresse MAIL OVH liée à l’hébergement.

   $from  = "no-reply@sachadvr.fr";

 

   ini_set("SMTP", "smtp.sachadvr.fr");   // Pour les hébergements mutualisés Windows de OVH

 

   // *** Laisser tel quel

 

   $JOUR  = date("Y-m-d");

   $HEURE = date("H:i");

 

   $Subject = "Test Mail - $JOUR $HEURE";

 

   $mail_Data = "";

   $mail_Data .= "<html> \n";

   $mail_Data .= "<head> \n";

   $mail_Data .= "<title> Subject </title> \n";

   $mail_Data .= "</head> \n";

   $mail_Data .= "<body> \n";

 

   $mail_Data .= "Mail HTML simple  : <b>$Subject </b> <br> \n";

   $mail_Data .= "<br> \n";

   $mail_Data .= "bla bla <font color=red> bla </font> bla <br> \n";

   $mail_Data .= "Etc.<br> \n";

   $mail_Data .= "</body> \n";

   $mail_Data .= "</HTML> \n";

 

   $headers  = "MIME-Version: 1.0 \n";

   $headers .= "Content-type: text/html; charset=iso-8859-1 \n";

   $headers .= "From: $from  \n";

   $headers .= "Disposition-Notification-To: $from  \n";

 

   // Message de Priorité haute

   // -------------------------

   $headers .= "X-Priority: 1  \n";

   $headers .= "X-MSMail-Priority: High \n";

 

   $CR_Mail = TRUE;

 

   $CR_Mail = @mail ($to, $Subject, $mail_Data, $headers);

 

   if ($CR_Mail === FALSE)

      {

      echo " ### CR_Mail=$CR_Mail - Erreur envoi mail <br> \n";

      }

   else

      {

      echo " *** CR_Mail=$CR_Mail - Mail envoyé<br> \n";

      }

?>