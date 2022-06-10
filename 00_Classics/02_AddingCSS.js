import React from 'react';
import ReactDOM from 'react-dom';

// Including inline css is not an effective way of styling the 
// components, so we use external css instead 

import "./style.css";

const App = ()=>{
    // We can include css using inline css styling
    // The names of properties are changed a bit in jsx like 
    // text-align ==> textAlign : React follows camel casing 

    return (
        // In react we can only return at most one element, so wrap up multiple
        // elements into one. 
        <div>
        <h1 style={{textAlign:"center"}}>Hello World</h1>
        <button className='button'>Submit Here</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Style.css file includes the following: 
/* 

body {
    background: #333945;
}

h1 {
    color: whitesmoke;
}

.button {
    background-color: #26ae60;
    border: none;
    padding: 15 30;
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: large;
} 

*/