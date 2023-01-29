import React from 'react'
import Portfolio from './Portfolio'
import WhoAmi from './WhoAmi'
import './Main.scss'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <main>
        <WhoAmi/>
        <Portfolio/>
        <Contact/>
        <div id="topscroll" data-aos="fade-up" data-aos-anchor="#whoami"> 
        <a href="#"><FontAwesomeIcon icon={faChevronUp} color="white"/>
    </a></div>
    </main>
  )
}
export default Main