import { FaHtml5, FaCss3, FaSass, FaPython, FaPhp, FaSpinner} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { VscTerminalPowershell } from 'react-icons/vsc';
import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.scss'

const Portfolio = () => {
  const [portfolio, setPortfolio] = React.useState<any[]>([]);

  let isFetched = false;
  async function fetchPortfolio() {
    isFetched = true;  

    const cookie = document.cookie.split(';').find((item) => item.includes('portfolio'));
    if (cookie) {
        const cookieData = localStorage.getItem('portfolio');
        setPortfolio(JSON.parse(cookieData!));
        return;
    }

    const response = await fetch('https://api.github.com/users/sachadvr/repos',
    {
        headers: {
            'User-Agent': 'request'
          }
    });
    const data = await response.json();

    const languages = await Promise.all(data.map(async (item:any) => {
        const response = await fetch(`https://api.github.com/repos/sachadvr/${item.name}/languages`,
        {
            headers: {
                'User-Agent': 'request'
              }
              });
        const data = await response.json();
        return data;
    }));
    
    const port = data.map((item:any, index:number) => {
        return {
            ...item,
            languages: languages[index]
        }
    })
    setPortfolio(port);
    document.cookie = `portfolio=1;expires=${new Date(Date.now() + 3600000)};sameSite=strict;path=/`;
    localStorage.setItem('portfolio', JSON.stringify(port));
    
        
  }
    React.useEffect(() => {
        if (isFetched) return;
        fetchPortfolio();
    }, []);





  return (
    <div className="content portfolio">
        <section id="portfolio" className="boxcontainer">
        <div id="active"><div id="highlight"><p>CasaROSA</p> <br/><br/><p>un projet de famille situé en Alentejo qui permettra la location d&apos;une villa pour 12 personnes</p></div></div>
        
            <h1 className="section-title">Portfolio</h1>
            <div className="portfolio-box">
                

                {portfolio.map((project) => (
                    <Link onClick={()=> {
                        window.scrollTo({
                            top: document.documentElement.scrollTop + document.querySelector('.portfolio-box')!.getBoundingClientRect().top - 120,
                            behavior: 'smooth'
                        });
                    }} className="project-box no-grid noimage" key={project?.name} to={`/git/${project?.name}`}
                    >
                        {project?.description != null ? <div className="project-description"> {project?.description} </div>: ""}
                       
                        <div className="project-bio">
                            <h1 className="project-name">{project?.name.toUpperCase()}</h1>
                            <h3 className="project-desc">
                            <div className="langs flex gap-3 items-center">

                            {Object.keys(project?.languages).map((language, index) => {

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
                                }else {
                                    return language;
                                }
                                    
                                
                                
                            
                            })}
                            </div>

                                </h3>
                            </div>
                    </Link>
                ))}

                {/* <div className="project-box no-grid noimage custom">
                    <div className="project-bio">
                        <h1 className="project-name"></h1>
                        <h3 className="project-desc">
                            </h3>
                            </div>
                            </div> */}

            </div>
            
        </section>
    </div>
  )
}

export default Portfolio