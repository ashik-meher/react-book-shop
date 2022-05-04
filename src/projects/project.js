import React, {useState, useEffect} from 'react'


const projectListHeading = {
  textAlign: 'center',
  color: 'red',
  padding: '10px',
}

const customCard = {
    maxWidth : '200px',
    padding: '20px',
}


const projectSection = {

    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-evenly',

}

const  Project = (props) => {
  return (
    <div className='card' style={customCard}>
        <h4>{props.name}</h4>
        <h5>Scope: {props.scope}</h5>
        <h6>Budget: {props.budget}</h6>
    </div>
  )
}


export default function ProjectList () {

    let [allprojects, setProjects] = useState([]);

    const getProjects = async() => {

        const res = await fetch("http://localhost:8080/projects");

        const allprojects = await res.json();

        setProjects(allprojects);
        console.log(allprojects);
        //test if it generates a infinite loop
    } 
    useEffect(() => {
        getProjects();
        
    }, [])
    // if you dot not provide a callback value it will generate infinite loop
    return (
        <>

        <h4 style={projectListHeading}>Here are some of our project works!</h4>

        <div style={projectSection}>

            {allprojects.map((project) => {

                const {id, name, scope, budget} = project;
                return (

                     <Project style={projectListHeading} name={name} scope={scope} budget={budget}/>

                )

               

            })}
            

             


        </div>

        

        </>
    )
}
