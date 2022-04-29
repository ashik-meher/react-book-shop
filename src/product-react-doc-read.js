import React from "react";

//import ReactDOM from "react-dom";

const cardStyle = {
    width:'400px',
    //height: '350px',
    margin: '5px',

}
const name = 'Diploma Milk';
const img = 'https://images.othoba.com/images/thumbs/0347117_diploma-instant-full-cream-milk-powder-500gm.jpeg';

const products = [
    {
        name:'Diploma Milk',
        pricePerUnit: 480,
        img:'https://images.othoba.com/images/thumbs/0347117_diploma-instant-full-cream-milk-powder-500gm.jpeg'

    },
    {
        name:'Mosar Coil',
        pricePerUnit: 8,
        img:'https://images.othoba.com/images/thumbs/0347117_diploma-instant-full-cream-milk-powder-500gm.jpeg',

    },
    {
        name:'Laccha Semai',
        pricePerUnit: 40,
        img:'https://images.othoba.com/images/thumbs/0347117_diploma-instant-full-cream-milk-powder-500gm.jpeg',


    },
    {
        name:'Chinigura Rice',
        pricePerUnit: 140,
        img:'https://images.othoba.com/images/thumbs/0347117_diploma-instant-full-cream-milk-powder-500gm.jpeg',



    }
] 

const Product = (props) => {
        console.log(props);
    return <>



      <div className="card" style={cardStyle}>
        
              <img className="card-image-top" src={/*img*/ props.img} alt="Banana"></img>

        

          <div className="card-body">

              <h1>Item Name: {/*name*/} {props.name}</h1>
              <h3>{props.pricePerUnit}</h3>
 

          </div>

      </div>
    </>
}

function ProductList (){
    return (
        <>

        <div className="container">

            <div className="row">

                {products.map(e => {
                    return   (<Product name={e.name} pricePerUnit={e.pricePerUnit} img={e.img} />)
                })}
             

       
                 

            </div>

        </div>
     
        </>
    )
}


//export {Product, ProductList};

export default ProductList;

/*
//static component list for products

   <Product name={products[0].name} pricePerUnit={products[0].pricePerUnit} />
   <Product name={products[1].name}  pricePerUnit={products[1].pricePerUnit}/>
   <Product/>
   <Product/>

   the main theory is here:

   design is designed on component and component tree
   in SPA

   signle component holds props

   some same kind of componets build Component List

   you iterate over an array to pass the props value in component list

   this thing happen in rendering the component list

   where as the component is the blueprint of html 5 custom component with an api of consuming
    custom data attributes
    
   iterate over an array and return the component with changing values based on props already declared in the 
   component declaration; responsible of iterating over an arry only for data attrs

   other static design and data will be rendered from the component blueprint design


*/