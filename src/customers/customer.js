import React, {useState, useEffect} from 'react';


const customerSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
}

const cusStyle = {
    display: 'flex'

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
    <div style={customerSectionStyle} className="row">
        <h4> Here is all our happy customers!</h4>

      

        {customers.map((customer)=> {
            const {id, name, professional, age} = customer;

            return (
                <>
                  <div className='card' key={id}>
                      
                      <h5>{name}</h5>
                      <h6>{professional}</h6>
                      <h6>{age}</h6>
                  </div>

                </>
            )

        })}

        


    </div>
  )
}
