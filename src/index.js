import React from 'react'

import ReactDOM from 'react-dom'

import headerImage from './img/space-goat.jpg';

import navImage from './img/spc-goat.png';

import './index.css';



const bookName = 'I Love You to the moon and back';




function BookList(){
  return (<>
     
      <Header/>
      <h2 className='web-heading'>Space Goat AeroSpace INC. </h2>

      <TavBar/>
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
     
   

     <Image/>

     <BookName/>

     

     <Author/>

     <button className='btn btn-primary spec'>BOOK NOW</button>

     


     <div className='icon-holder'>

       <a href='https://amazon.com'><span className="material-icons">
verified
</span></a>
      <span className="material-icons">
    all_inclusive
</span>



<span className="material-icons">
favorite
</span>

<span className="material-icons">
info
</span>



        
     
      <i className="material-icons">add</i>

      <i className="small material-icons">insert_chart</i>


      <i className="small material-icons">      account_circle</i>
     


     </div>

     <LoveCounter/>




  </div>
}

const Image = () => {
  return <>
  <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="I love u moon and back"/>

  </>
}


const BookName =()=> {return <h5 className='book-name'>{bookName.toUpperCase()}</h5>}

const Author = () => { return <h6 className='author'><b> AVIATOR </b> Ashik Meher Mobin</h6>}

const Footer = () => {
  return <footer className='footer-content'>
         
        <p style={{padding: '0'}}>Made with &#10084;&#65039; &copy; Reserved by DSS </p>
         

         </footer>
}





const LoveCounter = () =>{

  return <div>
    <p className="love" onClick={clicka} > <span className="material-icons"   >&#10084;  </span> </p><p className="loveCounter">{6}</p>

    <span className="material-icons">&#xE87C;</span>{6} 

    <span className="material-icons">&#xE87C;</span>{6} 

  </div>
  
}

const NavBar = () => {
  return <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"> <img className="navlogo" src={navImage}></img></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons">search</i></a></li>
        <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>

}

const TavBar = () => {
    return <div><nav className="teal lighten-2" style={{padding:'0px 10px', position: 'static'}}>
	<div className="nav-wrapper">
		<a href="#" className="brand-logo"> <img className="navlogo" src={navImage}></img></a>

		<a href="#" className="sidenav-trigger" dataTarget="mobile-nav">
			<i class="material-icons">menu</i>
		</a>

		<ul className="right hide-on-med-and-down "  >
			<li><a href="#">FLIGHTS</a></li>
			<li><a href="#">PRIVATE JET</a></li>
			<li><a href="#">CHARTERS</a></li>
			<li><a href="#">SELF DRIVING DRONES</a></li>
			<li><a href="#">CHOPER SERVICE</a></li>
		</ul>
	</div>
</nav>


<ul class="sidenav" id="mobile-nav">
	    <li><a href="#">Home</a></li>
			<li><a href="#">Video</a></li>
			<li><a href="#">Service</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
</ul>
</div>

}


let clicka = () => {
  console.log('hAHA');
   let loveCounter = document.querySelectorAll('.loveCounter');
   let love = document.querySelector('.love');

  for( let c=0; c< loveCounter.length;c++){
       let lv= parseInt(loveCounter[c].innerHTML);
       lv +=1;
       loveCounter[c].innerHTML = lv;

  }
 
}





ReactDOM.render(<BookList/>, document.getElementById('root'));
