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

const validURI = 'http://www.google.com';




const navStyle = {
    backgroundColor: '#D9E2E2',

};

const Nav = () => {
    return <>
           

          <ul className="nav" style={navStyle}>
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

        <ProjectList/>



        <TeamMembers/>

        


        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));