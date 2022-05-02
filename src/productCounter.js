import React, {useState} from 'react';
//import ReactDOM from "react-dom";


const productCounterStyle = {
 
padding:'10px 10px',
margin:'5px',
borderRadius: '5px',
background: 'whitesmoke',
border: '2px solid whitesmoke',
boxShadow: '1.5px 2px pink'


}

const counterStyle = {
    margin: '5px',
    color:'blue',
    fontWeight:'bold'
}

const addCartSectionStyle = {
    margin: '10px 5px',

}

export default function ProductCounter(props) {


   //const loved = 67;
    


    const [counter, setCounter] = useState(0);

const decrementHandler = () => {

    setCounter(counter -1);
    console.log(counter)

}

const incrementHandler = () => {
    setCounter(counter +1);
    console.log(counter)
}

const defaultBehav = (e) => {
    console.log(e.target.value);
    console.log(counter);
}



  return (
    <div style={addCartSectionStyle} >

        <h6>Add to cart</h6>

        <button style={productCounterStyle} onClick={decrementHandler} onChange={defaultBehav}>-</button>
        <span style={counterStyle}>{counter}</span>
        
        <button style={productCounterStyle}  onClick={incrementHandler} onChange={defaultBehav}>+</button>


        <p className="loveCounter"><i className="fa fa-heart" aria-hidden="true"></i> <span>{props.loved}</span> </p>







    </div>
  )
}


