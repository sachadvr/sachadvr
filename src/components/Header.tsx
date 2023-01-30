import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useEffect } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {

    const [repos, setRepos] = React.useState(0)
    let isFetched = false;
    useEffect(() => {
        if (isFetched) return;
        fetchRepos()
    }, [repos])
        
    async function fetchRepos() {
        isFetched = true;

        const cookie = document.cookie.split(';').find((item) => item.includes('repos'));
        if (cookie) {
            const cookieData = localStorage.getItem('repos');
            setRepos(JSON.parse(cookieData!));
            return;
        }
        fetch("https://api.github.com/users/sachadvr",
        {
            headers: {
                'User-Agent': 'request'
              }
        })
            .then(response => response.json())
            .then(data => {
                setRepos(data.public_repos);
                document.cookie = `repos=1;expires=${new Date(Date.now() + 3600000)}; samesite=strict;`;
                localStorage.setItem('repos', JSON.stringify(data.public_repos));
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
                    <a href="https://instagram.com/sachadvr" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
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
                <Link to="/links" className="contact-btn">Me Contacter</Link>
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
            <Link to="/"
            onClick={() => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
            }}
            ><span>Scroll</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </Link>
        </div>


    </header>
  )
}

export default Header