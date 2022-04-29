import React from 'react'

import ReactDOM from 'react-dom'

import {Foo, Kalu} from './himsg';

import Document from './cl';

const  Lala = () => {
    return <>

    <p>Hi</p>
    <p>Jay</p>

    <Foo/>
    <Kalu/>
  



    <Sala/>
    </>
}

function Sala () {
    return <>

    <p>Hello World!</p>  

    <p>{Document.name}</p>

    {Document.submit()}

    </>
}

ReactDOM.render(<Lala/>, document.getElementById('root'));

