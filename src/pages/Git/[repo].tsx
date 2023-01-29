import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const Git = () => {
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
                setReadme(data);
            })

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
            setRepo(repo

            );
            console.log(repo)

        })

        
    }

    React.useEffect(() => {
        if (isFetched) return;
        fetchRepo();
    }, []);


  return (
    <>
    <div className="m-7">
    {/* filter repo to check if params.repoName is in repo */}
    {/* show only the part of the repo */}
    <h1 className='text-sm'>{
        repo.filter((item:any) => {
            if (item.name === params.repoName) {
                return item;
            }
        }
        ).map((item:any) => {
          return (
            <div key={item.name}>
              
              <Link to="/" ><h1><FontAwesomeIcon icon={faChevronCircleLeft} /> {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</h1> </Link>
              {/* <img src={`https://raw.githubusercontent.com/sachadvr/${item.name}/master/preview.png`} alt={item.name} className='w-1/2' /> */}
              <img src={"/src/images/github-logo-vector.svg"} alt={item.name} className='w-24' />
              <h1>{item.description}</h1>

              Ouvrir le projet sur github : <a href={`https://github.com/sachadvr/${item.name}`}>
              <button className="bg-blue-100 p-1">{item.name}</button></a>
              <iframe src={`https://ghbtns.com/github-btn.html?user=sachadvr&repo=${item.name}&type=star&count=true`} frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>

              <div className="container border border-black p-5 mt-3 rounded-sm">

              <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
              </div>
            </div>
          )

        }
        )
        
      

    }</h1>

    </div>
    </>

  )
}
export default Git