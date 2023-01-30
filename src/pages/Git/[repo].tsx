import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import githublogo from '../../images/github-logo-vector.svg'
import 'github-markdown-css/github-markdown-light.css'

const Git = () => {
    const filteredContent = () => {
        let content = (<>
        <Link to="/"><button>
            <FontAwesomeIcon icon={faChevronCircleLeft} /> Retour à la page d&apos;accueil</button> </Link><br/>Impossible de trouver le projet...</>);
        repo.filter((item:any) => {
            if (item.name === params.repoName) {
                return item;
            }
        }
        ).map((item:any) => {
            console.log(item);
          content = (
            <div key={item.name}>
              
              <Link to="/" ><h1><FontAwesomeIcon icon={faChevronCircleLeft} /> {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</h1> </Link>
              {/* <img src={`https://raw.githubusercontent.com/sachadvr/${item.name}/master/preview.png`} alt={item.name} className='w-1/2' /> */}
              <img src={githublogo} alt={item.name} className='w-24' />
              <h1>{item.description}</h1>

              Ouvrir le projet sur github : <a href={`https://github.com/sachadvr/${item.name}`}>
              <button className="bg-blue-100 p-1">{item.name}</button></a>
              <iframe src={`https://ghbtns.com/github-btn.html?user=sachadvr&repo=${item.name}&type=star&count=true`} frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>

              <div className="container border border-black p-5 mt-3 rounded-sm markdown-body">

              <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
              </div>
            </div>
          )

        }
        )
        return content;
        
        
    }
    const params = useParams();
    let isFetched = false;
    const [repo, setRepo] = React.useState<any>([]);
    const [filteredRepo, setFilteredRepo] = React.useState<any>([]);
    const [readme, setReadme] = React.useState<any>([]);
    function fetchRepo() {
        isFetched = true;
        fetch(`https://raw.githubusercontent.com/sachadvr/${params.repoName}/master/README.md`)
            .then(res => res.text())
            .then(data => {
                if (data === '404: Not Found') {
                    setReadme('Aucun README.md trouvé');
                }else {
                    setReadme(data);
                }
            })

            const cookie = document.cookie.split(';').find((item) => item.includes('reposList'));
            if (cookie) {
                const cookieData = localStorage.getItem('reposList');
                setRepo(JSON.parse(cookieData!));
                return;
            }
        fetch(`https://api.github.com/users/sachadvr/repos`)
        .then(res => res.json())
        .then(data => {
            // return only name & description
            const repo = data.map((item:any) => {
                return {
                    name: item.name,
                    description: item.description
                }
            }
            )
            setRepo(repo);
            document.cookie = `reposList=1;expires=${new Date(Date.now() + 3600000)};sameSite=strict;path=/`;
            localStorage.setItem('reposList', JSON.stringify(repo));

        })

        
    }

    React.useEffect(() => {
        if (isFetched) return;
        fetchRepo();
    }, []);


  return (
    <>
    <div className="m-7">
    <h1 className='text-sm'>{filteredContent()}</h1>

    </div>
    </>

  )
}
export default Git