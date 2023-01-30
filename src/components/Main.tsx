import React from 'react'
import Portfolio from './Portfolio'
import WhoAmi from './WhoAmi'
import './Main.scss'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Main = () => {
  function ObserveScroll() {
    const topScroll = document.getElementById('topscroll');
    if (window.scrollY > 100) {
      topScroll?.classList.add('show');
    } else {
      topScroll?.classList.remove('show');
    }
  }
  window.addEventListener('scroll', ObserveScroll);
  return (
    <main>
        <WhoAmi/>
        <Portfolio/>
        <Contact/>
        <div id="topscroll"> 
        <Link to="/" onClick={e=> {window.scroll(0,0)}}><FontAwesomeIcon icon={faChevronUp} color="black"/>
    </Link></div>
    </main>
  )
}
export default Main