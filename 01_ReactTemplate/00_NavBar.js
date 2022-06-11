import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white bg-dark">
            <a className="navbar-brand text-success" href="#">Navbar</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Meeting</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;

// Since the wesite uses  bootstrap from CDN, we have to add the link to the index
// html file in the public section. 

// App.js
/* 
import React from "react";

import NavBar from "./NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
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

