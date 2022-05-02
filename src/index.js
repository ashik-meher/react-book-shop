import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';

import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import About from "./page/about";

import ProductList from './product';

//import ProductCounter from "./productCounter";

import Customer from './customers/customer';

const validURI = 'http://www.google.com';






const Nav = () => {
    return <>
           

          <ul className="nav">
              <li ><a className="nav-link" href={validURI}>Home</a></li>
              <li><a className="nav-link" href={validURI}>Shop</a></li>
                <li><a className="nav-link" href={validURI}>Legacy</a></li>

             <li><a className="nav-link" href={validURI}>Services</a></li>


          </ul>
    </>
}


function App (){
    return (
        <>

        <Nav/>
       
        <About/>
        
        <ProductList/>


        <Customer/>


        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));