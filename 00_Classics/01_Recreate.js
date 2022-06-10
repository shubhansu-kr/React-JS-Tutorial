// Goes by the name index.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    return (
        <h1>Hello World</h1>
    );
};

// App is not a function, it's an element for the html
ReactDOM.render(<App />, document.getElementById('root'));