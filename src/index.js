import React from 'react'

import ReactDOM from 'react-dom'

import headerImage from './img/space-goat.jpg';

import navImage from './img/spc-goat.png';

import './index.css';


const secondBook = {
  bookName: 'I Love You to the moon and back',
  author: 'Ashik Meher Mobin',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
};

const thirdBook = {

  bookName: 'Welcome to the World : keepsake gift book for a new baby',
  author: 'Lucy Tapper , Steve Wilson',
  img: 'https://m.media-amazon.com/images/I/71VziYQJR7L._AC_UY218_.jpg'

}

const fourthBook = {

  bookName: 'Maisy Goes on a Plane: A Maisy First Experiences Book',
  author: 'Lucy Cousins',
  img: 'https://m.media-amazon.com/images/I/91Yn0eOwpxL._AC_UY218_.jpg'

}

const bookName = 'I Love You to the moon and back';

//const bookNamei = 'Ok Man';

const author = 'Ashik Meher Mobin The Great';

const job = 'Software Architec';

const jobs = ['Developer', 'Engineer', 'Artist', 'Bekar', 'Project Manager', 'Scientist'];

const imgSrc = 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg';


function BookList(){
  return (<>
    <TavBar/>
     
      <Header/>
      <h2 className='web-heading'>Space Goat AeroSpace Inc. </h2>

    
    <section className='booklist'>
     

   

   <Book job={job} author={author} bookName={bookName} image={imgSrc}  > <p>Is is the Children Batku?</p> </Book>
   <Book job={jobs[0]} title='Sagol Premi' author={thirdBook.author} bookName={thirdBook.bookName} image={thirdBook.img} ></Book>
   <Book author={secondBook.author} author={fourthBook.author} bookName={fourthBook.bookName} image={fourthBook.img}></Book>
   <Book job={jobs[2]} ></Book>
   <Book job={jobs[5]} ></Book>
   <Book job={jobs[4]} ></Book>
  

   
 

    </section>

    <Footer/>
    </>
  )
};

const Header = () =>{
  return <header style={{width:'100%', margin:'auto', display: 'flex', alignItems:'center', justifyContent: 'center'}}>
  <img src={headerImage} style={{width:'100px', height:'100px', borderRadius: '50%', margin:'85px 0 0 0'}} alt='Space-goat'/>
  
  </header>;
}

const Book = (props) => {
  console.log(props);
  return <div className='book'>
     
   

       <img src={props.image} alt="I love u moon and back"/>

        <h5 className='book-name'>
          {/*bookName.toUpperCase()*/}
          {props.bookName}
        </h5>

        <h6 className='author'>
          <b> AVIATOR  </b> {props.author}
        </h6>

      



     <button className='btn btn-primary spec'>BOOK NOW</button>
     <br/>

    <button className="btn btn-primary">{props.job}</button>
  
   
   <p>{props.title}</p>
     

     


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


      <i className="small material-icons">account_circle</i>
     


     </div>

     <LoveCounter/>




  </div>
}
//Individual elements
/*
const Image = () => {
  return <>
  <img src={imgSrc} alt="I love u moon and back"/>

  </>
}


const BookName =()=> {
  return <h5 className='book-name'>
    {bookName.toUpperCase()}
    </h5>
    }

const Author = (props) => { 
  return <h6 className='author'>
    <b> AVIATOR  </b> {props.author}
    </h6>
    }

*/

const Footer = () => {
  return <footer className='footer-content'>
         
        <p style={{padding: '0'}}>Made with &#10084;&#65039; All &copy;Copyright Reserved by DSS 1992-2021 </p>
         

         </footer>
}





const LoveCounter = () =>{

  return <div>
    <p className="love" onClick={clicka} > <span className="material-icons"   >&#10084;  </span> </p><p className="loveCounter">{6}</p>

    <span className="material-icons">&#xE87C;</span>{6} 

    <span className="material-icons">&#xE87C;</span>{6} 

  </div>
  
}
/*
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
*/
const TavBar = () => {
    return <div><nav className="blue darken-2" style={{padding:'0px 10px', position: 'fixed'}}>
	<div className="nav-wrapper">
		<a href="#" className="brand-logo"> <img className="navlogo" src={navImage}></img></a>

		<a href="#" className="sidenav-trigger" dataTarget="mobile-nav">
			<i class="material-icons">menu</i>
		</a>

		<ul className="right hide-on-med-and-down "  >
			<li><a href="https://google.com">FLIGHTS</a></li>
			<li><a href="https://google.com">HIRE PRIVATE JETS</a></li>
			<li><a href="https://google.com">CHARTERS</a></li>
			<li><a href="https://google.com">UBER AUTONOMOUS DRONES</a></li>
			<li><a href="https://google.com">CHOPER SERVICE</a></li>
        <li><a href="sass.html"><i class="material-icons aila">search</i></a></li>
      <li><a href="badges.html"><i class="material-icons aila">view_module</i></a></li>
    
		</ul>
	</div>
</nav>


<ul class="sidenav" id="mobile-nav">
	    <li><a href="https://google.com">Home</a></li>
			<li><a href="https://google.com">Video</a></li>
			<li><a href="https://google.com">Service</a></li>
			<li><a href="https://google.com">About</a></li>
			<li><a href="https://google.com">Contact</a></li>
</ul>
</div>

}


let clicka = () => {
  console.log('hAHA');
   let loveCounter = document.querySelectorAll('.loveCounter');
   //let love = document.querySelector('.love');

  for( let c=0; c< loveCounter.length;c++){
       let lv= parseInt(loveCounter[c].innerHTML);
       lv +=1;
       loveCounter[c].innerHTML = lv;

  }
 
}





ReactDOM.render(<BookList/>, document.getElementById('root'));
