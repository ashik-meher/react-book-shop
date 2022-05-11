import React, {useState, useEffect} from 'react'


const subStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

}

const cardStyle = {

    padding: '10px',

}

const headingStyle = {
    textAlign: 'center',
    color: 'cyan',
}


const sectionContainer = {
    margin: '100px 0',
}

const Subscriber = (props) => {
    return (
        <>

        <div className='card' style={cardStyle}>

        <h5>Happy Face</h5>

        <p>ID: {props._id}</p>
        <p>Emial: {props.email}</p>

        </div>
      
            

        </>
    )
}



export default function Subscribers() {

    const [initTeam, setTeam] = useState([]);

    const useURI = 'http://localhost:8081/emails/';



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

        <h4 style={headingStyle}>All Proud Subcribers</h4>

        <div style={subStyle}>

      


       {  initTeam.map((m) => {

           const {_id, email} = m;

           return (
             
           <Subscriber  key={_id}  _id={_id} email = {email}/>
           )

         
       })
         }


    

        
         </div>


        
        
        
    </div>
  )
}

