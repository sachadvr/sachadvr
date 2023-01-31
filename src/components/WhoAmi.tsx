import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3, FaHtml5, FaPhp, FaPython, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { SiJavascript, SiSymfony, SiTypescript } from 'react-icons/si'
import { VscTerminalPowershell } from 'react-icons/vsc'
import './WhoAmi.scss'

const WhoAmi = () => {
    function getLanguages() {
        let languages: any[] = [];
        if (localStorage.getItem('portfolio') != null) {
            JSON.parse(localStorage.getItem('portfolio') || '{}').map((project: any) => (
            Object.keys(project?.languages).map((language: any, index: any) => {
                    languages.push(language);
                }
            )

        ))
            }else {
                languages = [];
            }
            languages = [...new Set(languages)];
            return languages;
    }
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
                        {/* fais moi une accroche pour un site vitrine */}
                        <strong>Étudiant en licence d&apos;informatique</strong>,  à l&apos;Université catholique de Lille, je suis un développeur passionné.
J&apos;ai une expérience professionnelle diversifiée, allant de la gestion d&apos;équipe à la réalisation de projets web en passant par l&apos;encaissement client.
Je suis passionné par la technologie notamment l’IA et le machine learning et en constante recherche de nouveaux défis professionnels.
                        {/*  j&apos;ai décidé de me consacrer à mes passions, l&apos;une d&apos;elles est le développement web, d&apos;où m&apos;est venu l&apos;idée de ce site, il fait office de CV en ligne ainsi que d&apos;un référencement pour vous apprendre à mieux me connaitre et à mieux connaitre mes futurs projets. */}
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

                <h2>Mes Technologies ?</h2>
    
                <blockquote>
                    <div className="mx-auto w-fit flex gap-3 items-center">
                        <FaReact />
                        <FaVuejs />
                        <SiSymfony />
                        {getLanguages().map((language: any, index: any) => {
                            if (language == "HTML") {
                                return <FaHtml5 key={language} />
                            } else if (language == "CSS") {
                                return <FaCss3 key={language} />
                            }else if (language == "SCSS") {
                                return <FaSass key={language} />
                            
                            } else if (language == "JavaScript") {
                                return <DiJavascript key={language} />
                            } else if (language == "TypeScript") {
                                return <SiTypescript key={language} />
                            } else if (language == "PHP") {
                                return <FaPhp key={language} />
                            } else if (language == "Python") {
                                return <FaPython key={language} />
                            }else if (language == "Shell") {
                                return <VscTerminalPowershell key={language}/>
                            }

                            else {
                                return language;
                            }

                            
                        })}
                        
                    </div>
                </blockquote>
            </div>
        </section>
    </div>
    </>
  )
}

export default WhoAmi