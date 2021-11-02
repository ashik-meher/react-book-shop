import React from 'react'

import ReactDOM from 'react-dom'

import headerImage from './img/space-goat.jpg';

import './index.css';





function BookList(){
  return (<>
     
      <Header/>
      <h1 className='web-heading'>The Space Goat Repository</h1>
    <section className='booklist'>
     

   

   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>

   
 

    </section>

    <Footer/>
    </>
  )
};

const Header = () =>{
  return <header style={{width:'100%', margin:'auto', display: 'flex', alignItems:'center', justifyContent: 'center'}}>
  <img src={headerImage} style={{width:'100px', height:'100px', borderRadius: '50%', margin:'15px 0'}} alt='Space-goat'/>
  
  </header>;
}

const Book = () => {
  return <div className='book'>
     
     <h2> This is a Book</h2>

     <Image/>

     <BookName/>

     

     <Author/>
     

  </div>
}

const Image = () => {
  return <>
  <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="I love u moon and back"/>

  </>
}


const BookName =()=> {return <h3>I love you to the moon and back</h3>}

const Author = () => { return <h5>Ashik Meher Mobin</h5>}

const Footer = () => {
  return <footer className='footer-content'>
         
        <p style={{padding: '0'}}>Made with &#10084;&#65039; &copy; Reserved by Ashik Meher, PHP Engineer, DSS </p>
         

         </footer>
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
