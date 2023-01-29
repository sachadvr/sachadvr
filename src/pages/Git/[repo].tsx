import React from 'react'
import { useParams } from 'react-router-dom';


const Git = () => {
    const params = useParams();
    let isFetched = false;
    const [repo, setRepo] = React.useState<any>([]);
    const [filteredRepo, setFilteredRepo] = React.useState<any>([]);
    function fetchRepo() {
        isFetched = true;
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
            <div key={item.name} className='text-2xl'>
              <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</h1> 
              {/* <img src={`https://raw.githubusercontent.com/sachadvr/${item.name}/master/preview.png`} alt={item.name} className='w-1/2' /> */}
              <img src={"/src/images/github-logo-vector.svg"} alt={item.name} className='w-24' />
              <h1>{item.description}</h1>

              <iframe src={`https://ghbtns.com/github-btn.html?user=sachadvr&repo=${item.name}&type=star&count=true`} frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>

              {/* iframe of the repo */}
              <iframe src={`https://github.com/sachadvr/${item.name}`} frameBorder="0" scrolling="0" width="100%" height="100%"></iframe>
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