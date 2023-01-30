import { faCss3, faHtml5, faJs, faPhp, faPython, faSass, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <a className="project-box no-grid project1">
                    <div className="project-bio">
                        <h1 className="project-name">CasaRosa.pt <FontAwesomeIcon icon={faSpinner } /></h1>
                        <h3 className="project-desc">En cours</h3>
                    </div>
                </a>
                <a className="project-box no-grid project2">
                    <div className="project-bio">
                        <h1 className="project-name">RV-Services <FontAwesomeIcon icon={faSpinner } /></h1>
                        <h3 className="project-desc">En cours</h3>
                    </div>
                    
                </a>

                {portfolio.map((project) => (
                    <Link className="project-box no-grid noimage" key={project?.name} to={`/git/${project?.name}`}>
                        <div className="project-bio">
                            <h1 className="project-name">{project?.name}</h1>
                            <h3 className="project-desc">{project?.description}
                            <div className="langs flex gap-3 items-center">

                            {Object.keys(project?.languages).map((language, index) => {

                                    if (language == "HTML") {
                                        return <FontAwesomeIcon icon={faHtml5} key={language} />
                                    } else if (language == "CSS") {
                                        return <FontAwesomeIcon icon={faCss3} key={language} />
                                    }else if (language == "SCSS") {
                                        return <FontAwesomeIcon icon={faSass} key={language} />
                                    
                                    } else if (language == "JavaScript") {
                                        return <FontAwesomeIcon icon={faJs} key={language} />
                                    } else if (language == "TypeScript") {
                                        return <FontAwesomeIcon icon={faSquareJs} key={language} />
                                    } else if (language == "PHP") {
                                        return <FontAwesomeIcon icon={faPhp} key={language} />
                                    } else if (language == "Python") {
                                        return <FontAwesomeIcon icon={faPython} key={language} />
                                    }else if (language == "Shell") {
                                        return <FontAwesomeIcon icon={faComputer} key={language}/>
                                }else {
                                    return language;
                                }
                                    
                                
                                
                            
                            })}
                            </div>

                                </h3>
                            </div>
                    </Link>
                ))}

            </div>
            
        </section>
    </div>
  )
}

export default Portfolio