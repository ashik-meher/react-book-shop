import React from 'react'

import ReactDOM from 'react-dom'

import headerImage from './img/space-goat.jpg';

import './index.css';



function BookList(){
  return (<>
     
      <Header/>
      <h2 className='web-heading'>The Space Goat</h2>
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
     
     <h4> This is a Book</h4>

     <Image/>

     <BookName/>

     

     <Author/>

     <button className='btn btn-primary spec'>ORDER NOW </button>

     


     <div className='icon-holder'>

       <a href=''><span class="material-icons">
verified
</span></a>
      <span class="material-icons">
    all_inclusive
</span>



<span class="material-icons">
favorite
</span>

<span class="material-icons">
info
</span>



        
     
      <i class="material-icons">add</i>

      <i class="small material-icons">insert_chart</i>


      <i class="small material-icons">      account_circle</i>
     


     </div>




  </div>
}

const Image = () => {
  return <>
  <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="I love u moon and back"/>

  </>
}


const BookName =()=> {return <h5 className='book-name'>I love you to the moon and back</h5>}

const Author = () => { return <h6> Author: Ashik Meher Mobin</h6>}

const Footer = () => {
  return <footer className='footer-content'>
         
        <p style={{padding: '0'}}>Made with &#10084;&#65039; &copy; Reserved by DSS </p>
         

         </footer>
}




ReactDOM.render(<BookList/>, document.getElementById('root'))
