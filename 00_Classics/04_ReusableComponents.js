import React from "react";
import "./style.css";

// We wish to further simplify the button component into its own file 
import Button from "./button";
// Now Button is a html element just like header, body, div, p, etc. 
// Every React component should be closed tag,
// Self Closing : <Button />
// Container : <Button></Button>
const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Hello World</h1>
            <Button />
            {/* Now we have to pass the parameter for function here
                If we don't a default parameter is sent, which is empty  */}
            {/* <Button /> : We can have multiple buttons  */}

            <Button title={"App Store"} />
            <Button title={"Arcade"} />
        </div>
    );
};

export default App;

// Button.js
/*
import React from "react";

// Variables are passed using the curly braces
const Button = ({title}) => (
    <div>
        <button className='button'>{title}</button>
    </div>
);

export default Button;
*/

// style.css
/*
body {
    background: #333945;
    display: flex;
    justify-content: center;
}

h1 {
    color: whitesmoke;
}

.button {
    background-color: #26ae60;
    border: none;
    height: 30px;
    width: 200px;
    padding: 15 30;
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: large;
    margin: 10px;
}

*/

// Index.js
/* 
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

// Shift the component code to some other file to keep the code 
// clean and readable.

ReactDOM.render(<App />, document.getElementById('root'));
*/