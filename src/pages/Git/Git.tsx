import React from 'react'
import { Link } from 'react-router-dom'

import { FaChevronCircleLeft } from 'react-icons/fa'

const Git = () => {

  return (
    <div className="m-7">
    <h1 className='text-sm '>
        <Link to="/"><button className="flex items-center gap-1">
            <FaChevronCircleLeft /> Retour à la page d&apos;accueil</button> </Link><br/>Impossible de trouver le projet...</h1>
    </div>
  )
}
export default Git