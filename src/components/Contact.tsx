import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="content contact">
        
        <h2 id="contact"><i className="fas fa-address-card"></i>Me contacter</h2>

       <p id="desc">Si vous souhaitez plus d&apos;informations, il est notamment possible de me contacter en remplissant le formulaire ci-dessous</p>
       <form name="my_form" id="myForm" action="mail.php" method="post">
           <p>
               <label htmlFor="nom">Nom de la société ou du particulier</label>
               <input type="text" id="nom" name="nom" required /> <span></span>
           </p>
           <p>
               <label htmlFor="email">E-mail</label>
               <input type="email" id="email" name="email" required /> <span></span>
           </p>
           <p>
               <label htmlFor="tel">Tel</label>
               <input type="tel" id="tel" name="tel" required /> <span></span>
           </p>
           <p>
               <label htmlFor="message">Le message</label>
               <textarea id="message" name="message" required></textarea>
           </p>
           <p>
               <input type="text" id="website" name="website"/>
           </p>
           <p>
               <input id="btnsubmit" type="submit" value="Envoyer" name="Envoyer" /> <span id="spansubmit"><i className="scroll-icon fas fa-angle-right"></i></span>
           </p>
       </form>
   </div>
  )
}

export default Contact