import React from 'react'
import './WhoAmi.scss'

const WhoAmi = () => {
  return (
    <>
    <div className="bluredbottom"></div>
    <div className="content whoami">
        <section id="whoami">
            <div>
                <h2>
                    Qui suis-je ?
                </h2>
 
                <blockquote>
                    <p>
                        <strong>&Eacute;tudiant en Licence SDN</strong> après une réorientation, j&apos;ai décidé de me consacrer à mes passions, l&apos;une d&apos;elles est le développement web, d&apos;où m&apos;est venu l&apos;idée de ce site, il fait office de CV en ligne ainsi que d&apos;un référencement pour vous apprendre à mieux me connaitre et à mieux connaitre mes futurs projets.
                    </p>
                </blockquote>
            </div>
            <div>
 
                <h2>Pourquoi Moi?</h2>
   
                <blockquote>
                    <p>Polyvalent dans des divers domaines, j&apos;ai la capacit&eacute; de mieux m&apos;adapter et &ecirc;tre plus &agrave; m&ecirc;me de vous fournir un travail adapt&eacute; &agrave; vos besoins</p>
                </blockquote>
            </div>
            <div>

                <h2>Mes Outils ?</h2>
    
                <blockquote>
                    <p>Un &eacute;diteur de texte suffit &agrave; developper un site web, mais pour l&apos;embellir, un peu de <span id="highlight"> Photoshop, Illustrator</span>
                    </p>
                </blockquote>
            </div>
        </section>
    </div>
    </>
  )
}

export default WhoAmi