import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
// Shift the component code to some other file to keep the code 
// clean and readable.

ReactDOM.render(<App />, document.getElementById('root'));

// app.js includes 
/* 
import React from "react";
import "./style.css";

const App = ()=>{
    return (
        <div>
        <h1 style={{textAlign:"center"}}>Hello World</h1>
        <button className='button'>How are ya?</button>
        </div>
    );
};

export default App;
*/

// style.css includes : 
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
} */