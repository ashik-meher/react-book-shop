import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';

import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import About from "./page/about";

import ProductList from './product';

//import ProductCounter from "./productCounter";

import Customer from './customers/customer';

import ProjectList from "./projects/project";

import TeamMembers from "./team/team";

import Subscribers from "./subs/subscriber";

const validURI = 'http://www.google.com';




const navStyle = {
    backgroundColor: '#22A03A',


};

const navLink = {
    color: '#22A03A',
    padding: '7px 20px',

    "&:hover": {
        'background': 'red',
    }

    
}





const Nav = () => {
    return <>
           

          <ul className="nav" style={navStyle}>
              <li ><a className="nav-link" style={navLink} href={validURI}>HOME</a></li>
              <li><a className="nav-link" style={navLink} href={validURI}>SHOP</a></li>
              <li><a className="nav-link" style={navLink} href={validURI}>LEGACY</a></li>

              <li><a className="nav-link" style={navLink} href={validURI}>SERVICES</a></li>


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

        <ProjectList/>



        <TeamMembers/>

        <Subscribers/>

        


        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));