import React, {useState, useEffect} from 'react';


const customerSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '300px',
    padding: '20px',
}
/*
const cusStyle = {
    display: 'flex'

}
*/

const customerSectionHeading = {
    textAlign: 'center',
    color: 'skyblue',
    marginTop: '50px',
}

const customCard = {
    padding: '10px',
    minWidth: '150px',

}

export default function Customer() {

    let [customers, setCustomers] = useState([]);

    
const getCustomers =  async () => {

    const res = await fetch("http://localhost:8080/api");

    const customers = await res.json();

    setCustomers(customers);
}


    useEffect( () => {
        
        getCustomers();

        //const [customers] = data;

        //console.log(data);

        //setCustomers(customers);


       // console.log(customers)
    }, []);
       

        


    

 
  return (
  <>
      <h4 style={customerSectionHeading}> Here is all our happy customers!</h4>
  
    <div style={customerSectionStyle} >
    

      

        {customers.map((customer)=> {
            const {id, name, professional, age} = customer;

            return (
                <>
                  <div className='card' style={customCard} key={id}>
                      
                      <h5>{name}</h5>
                      <h6>{professional}</h6>
                      <h6>{age}</h6>
                  </div>

                </>
            )

        })}

        


    </div>


   </>
  )

}
