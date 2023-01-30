import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Git = () => {

  return (
    <div className="m-7">
    <h1 className='text-sm'>
        <Link to="/"><button>
            <FontAwesomeIcon icon={faChevronCircleLeft} /> Retour à la page d&apos;accueil</button> </Link><br/>Impossible de trouver le projet...</h1>
    </div>
  )
}
export default Git