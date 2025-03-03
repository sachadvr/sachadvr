import React from 'react'
import { useEffect } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaAngleDown } from 'react-icons/fa'
import useFetch from '../hooks/useFetch'

const Header = () => {
    const [errormessage] = React.useState('')

    const [repos, setRepos] = React.useState(0)
    const [lastestRepos, setlastestRepos] = React.useState(0)

    const {data, error, loading} = useFetch("https://api.sachadvr.fr/repos", 'GET')
    useEffect(() => {
        if (loading) return;
        const updated: any[] = data.filter((item: any) => {
            const date = new Date(item.updated_at)
            const now = new Date()
            const diff = now.getTime() - date.getTime()
            return diff < 1000 * 60 * 60 * 24 * 30
        });
        setlastestRepos(updated.length)
        setRepos(data.length)
    }, [data])
        
  return (
    <header>
        <div className='popup'>
            {error?.toString()}</div>
        <div className="profile-card">
            <div className="card-header">

                <div className="pic">
                    <i id="img"></i>
                </div>

                <div className="name">Sacha DVR</div>
                <div className="desc">Dev & Designer</div>
                <div className="sm">
                    <a className="grid place-items-center" href="https://instagram.com/sachadvr" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a className="grid place-items-center" href="https://twitter.com/SachaDvr" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a className="grid place-items-center" href="https://www.linkedin.com/in/sacha-duvivier-8b5a89205/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a className="grid place-items-center" href="https://github.com/sachadvr" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <Link to="/links" className="contact-btn">Me Contacter</Link>
            </div>
            <div className="card-footer">
                <div className="numbers">
                    <div className="item">
                        <span>{loading ? lastestRepos : '...'}</span> Projets en cours
                    </div>
                    <div className="border"></div>
                    <div className="item">
                        <span>{loading ? repos : '...'} </span> Projets finis
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="scroll">
            <Link className="grid grid-flow-col items-center" to="/"
            onClick={() => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
            }}
            ><span >Scroll</span>
                <FaAngleDown />
            </Link>
        </div>


    </header>
  )
}

export default Header