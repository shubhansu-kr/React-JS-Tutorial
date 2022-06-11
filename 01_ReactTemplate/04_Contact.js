import React from "react";

const Contact = () => {
    return (
        <section className="footer  bg-dark text-white">
            <p className="lead container">Contact us at Instagram</p>
            <p className="lead container">You can react via email too</p>
            <p className="lead container">NO COPYRIGHT</p>
        </section>
    );
};

export default Contact;

// Final Version of app and index js


// App.js
/*
import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";
import Contact from "./Contact";

const App = () => {
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <Feature />
            <GetInTouch />
            <Contact />
        </div>
    );
};

export default App;

*/

// Index.js
/* 
import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import App from './app.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

*/