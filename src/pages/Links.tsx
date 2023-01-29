import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faPinterest, faSnapchatGhost, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Links.scss'

const Links = () => {
  return (
    <div className="links-basic-content">
        <div className="profile-card">
      <div className="card-header">
      <div id="back"><Link to="/"><FontAwesomeIcon icon={faChevronCircleLeft} color="white" className='absolute top-5 left-5'/></Link></div>
      <div className="pic">
        <i id="img"></i>
      </div>
      
      <div className="name">Sacha DVR </div>
      <div className="mail"><a href="./index.html#contact">contact@sachadvr.fr</a></div>
      <div className="sm-box"><div className="sm">
        <a href="https://www.facebook.com/profile.php?id=100010069578181" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/SachaDvr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/sacha-duvivier-8b5a89205/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/sachadvr" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="sm">
        <a href="https://instagram.com/sachadvr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.snapchat.com/add/chacha151101?share_id=RjZDQjdG&locale=fr_FR" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSnapchatGhost} />
        </a>
        <a href="https://www.youtube.com/channel/UCNDLN4TdHwS_o1Z6SPiO15w" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.pinterest.fr/sachaduvivier/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
        </a>
      </div>
      </div>
        </div>
    
    </div>
    </div>
  )
}
export default Links