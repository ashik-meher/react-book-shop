import React, {useState, useEffect} from 'react'


const teamStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

}

const cardStyle = {

    padding: '10px',

}

const headingStyle = {
    textAlign: 'center',
    color: 'pink',
}


const sectionContainer = {
    margin: '100px 0',
}

const TeamMember = (props) => {
    return (
        <>

        <div className='card' style={cardStyle}>

        <h5>Happy Face</h5>

        <p>ID: {props.user_id}</p>
        <p>Emial: {props.email}</p>

        </div>
      
            

        </>
    )
}



export default function TeamMembers() {

    const [initTeam, setTeam] = useState([]);

    const useURI = 'http://localhost/phpoop/';



    const getUsers = async () => {

        const $resp = await fetch(useURI);

        const $users = await $resp.json();

        setTeam($users);
        console.log($users);


    }

    useEffect(() => {


        getUsers();

    }, [])
  return (
    <div style={sectionContainer}>

        <h4 style={headingStyle}>All Proud Soldiers</h4>

        <div style={teamStyle}>

      


       {  initTeam.map((m) => {

           const {id, user_id,email} = m;

           return (
             
           <TeamMember  key={id}  user_id={user_id} email = {email}/>
           )

         
       })
         }


    

        
         </div>


        
        
        
    </div>
  )
}



