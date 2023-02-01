import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3, FaHtml5, FaPhp, FaPython, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { SiSymfony, SiTypescript } from 'react-icons/si'
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
                languages = []
            }
            languages = [...new Set(languages)];
            return languages;
    }
    React.useEffect(() => {
        getLanguages();
    }, [])


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
                        <strong>Étudiant en licence d&apos;informatique</strong>,  à l&apos;Université catholique de Lille, je suis un développeur passionné.
J&apos;ai une expérience professionnelle diversifiée, allant de la gestion d&apos;équipe à la réalisation de projets web en passant par l&apos;encaissement client.
Je suis passionné par la technologie notamment l’IA et le machine learning et en constante recherche de nouveaux défis professionnels.
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
                    <div className="mx-auto w-fit grid gap-3 items-center border p-2 place-items-center grid-flow-col grid-rows-2 w-48 ">
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
                                return <><span>{language}</span></>
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