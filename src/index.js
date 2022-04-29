import React from "react";
import ReactDOM from "react-dom";

import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import About from "./page/about";

import ProductList from './product';

const validURI = 'http://www.google.com';




const Nav = () => {
    return <>
           

          <ul className="nav">
              <li ><a className="nav-link" href={validURI}>Home</a></li>
              <li><a className="nav-link" href={validURI}>About</a></li>

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
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));