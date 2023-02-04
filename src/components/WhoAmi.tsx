import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3, FaHtml5, FaJava, FaPhp, FaPython, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { SiSymfony, SiTypescript } from 'react-icons/si'
import { VscTerminalPowershell } from 'react-icons/vsc'
import './WhoAmi.scss'

import { HiOutlineCode } from 'react-icons/hi'
const WhoAmi = () => {
    const [langs, setLangs] = React.useState<JSX.Element[]>([])

    function getLanguages() {
        let languagesSET: string[] = [];
        if (localStorage.getItem('portfolio') != null) {
            JSON.parse(localStorage.getItem('portfolio') || '{}').map((project: any) => (
            Object.keys(project?.languages).map((language: string,) => {
                    languagesSET.push(language);
                }
            )

        ))
            languagesSET = [...new Set(languagesSET)];
            const languagesElement: JSX.Element[] = [];
            // Adding icons myself (because github api doesn't theses languages)
            languagesElement.push(<FaReact key="React" />);
            languagesElement.push(<FaVuejs key="Vue" />);
            languagesElement.push(<SiSymfony key="Symfony" />);
            languagesSET.map((language: string) => {
                    switch (language) {
                        case 'JavaScript':
                            languagesElement.push(<DiJavascript key={language} />)
                            break;
                        case 'TypeScript':
                            languagesElement.push(<SiTypescript key={language} />)
                            break;
                        case 'HTML':
                            languagesElement.push(<FaHtml5 key={language} />)
                            break;
                        case 'CSS':
                            languagesElement.push(<FaCss3 key={language} />)
                            break;
                        case 'SCSS':
                            languagesElement.push(<FaSass key={language} />)
                            break;
                        case 'PHP':
                            languagesElement.push(<FaPhp key={language} />)
                            break;
                        case 'Java':
                            languagesElement.push(<FaJava key={language} />)
                            break;
                        case 'Python':
                            languagesElement.push(<FaPython key={language} />)
                            break;
                        case 'React':
                            languagesElement.push(<FaReact key={language} />)
                            break;
                        case 'Vue':
                            languagesElement.push(<FaVuejs key={language} />)
                            break;
                        case 'Symfony':
                            languagesElement.push(<SiSymfony key={language} />)
                            break;
                        case 'PowerShell':
                            languagesElement.push(<VscTerminalPowershell key={language} />)
                            break;
                        case 'Hack':
                            languagesElement.push(<HiOutlineCode key={language} />)
                            break;
                        default:
                            languagesElement.push(<span key={language}>{language}</span>)
                    }
            setLangs(languagesElement)
        })
            }else {
                console.log('Failed to retrieve languages, retrying in 1s...')
                
                setTimeout(() => {
                    getLanguages();
                }
                , 1000)
                
            }
            
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
                    <div className="mx-auto w-fit grid gap-3 items-center border p-2 place-items-center grid-flow-col grid-rows-2 ">
                        
                        {langs}
                        
                    </div>
                </blockquote>
            </div>
        </section>
    </div>
    </>
  )
}

export default WhoAmi