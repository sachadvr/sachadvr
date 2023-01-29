import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useEffect } from 'react'
import './Header.scss'

const Header = () => {

    const [repos, setRepos] = React.useState(0)

    useEffect(() => {
        fetchRepos()
    }, [repos])
        
    async function fetchRepos() {
        fetch("https://api.github.com/users/sachadvr")
            .then(response => response.json())
            .then(data => {
                setRepos(data.public_repos);
            })
        
    }
  return (
    <header>
        <div className="profile-card">
            <div className="card-header">

                <div className="pic">
                    <i id="img"></i>
                </div>

                <div className="name">Sacha DVR</div>
                <div className="desc">Dev & Designer</div>
                <div className="sm">
                    <a href="https://www.facebook.com/profile.php?id=100010069578181" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com/SachaDvr" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/sacha-duvivier-8b5a89205/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/sachadvr" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <a href="./links.html" className="contact-btn">Me Contacter</a>
            </div>
            <div className="card-footer">
                <div className="numbers">
                    <div className="item">
                        <span>2</span> Projets en cours
                    </div>
                    <div className="border"></div>
                    <div className="item">
                        <span>{repos} </span> Projets finis
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="scroll">
            <a href="#whoami"><span>Scroll</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </a>
        </div>


    </header>
  )
}

export default Header