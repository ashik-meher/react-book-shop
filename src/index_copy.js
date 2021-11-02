import React from 'react'

import ReactDOM from 'react-dom'

//import Pending from './pending'

//stateless functional component using JSX
/* 
function Greeting(){
  return (
  <>
    <h1>What's up duck</h1>

    <ul>
      <li> <a href="https://www.google.com"> Hello borld!</a></li>
    </ul>

    <img src="img/space-goat.jpg"/>

    <input id="inpu" name="inpu"/>

  

  </>
  );
} */

/* const Greeting = () => {
  return React.createElement('h1', {}, 'Hello Sagol!');
} */


/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement(
    'h1', {}, 'Ok Bye React Element' )
    );
} 
 */

/*
function Greeting (){
  return (
    <>

    <Zikr/>

    <Message/>

    <Pending/>

    </>
  )
}

const Zikr = () => {
  return <h1>Allahu Akabr</h1>
}

const Message = () => {
  return     <p>This is my message</p>
}
*/

/* const Greeting = () => {
  return React.createElement('h1', {}, 'Hello Sagol!');
} */


/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement(
    'h1', {}, 'Ok Bye React Element' )
    );
} 
 */


function BookList(){
  return (
    <section>
   <h1 style={{textAlign: 'center'}}>This is a book list</h1>

   <Book/>

   
 

    </section>
  )
}

const Book = () => {
  return (<>
     
     <h3> This is a Book</h3>

  </>)
}

const Image = () => {
  return (
    <>
    
    </>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
