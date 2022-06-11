import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron ">
            <h1 className="display-4">App looks great!</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
                officiis odit rem provident nobis esse magni! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Assumenda velit dolorem repudiandae qui
                rerum possimus sit animi. Illo, laudantium ea!
            </p>
            <hr className="my-4" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                incidunt?
            </p>
            <a className="btn btn-success btn-lg" href="#" role="button"
            >React is awesome</a
            >
        </div>
    );
};

export default Jumbotron;

{/* // App.js  */ }
{/* 
    import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";

const App = () => {
    return (
        <div>
            <NavBar />
            <Jumbotron />
        </div>
    );
};

export default App;
*/}

{/* index.js */ }
{/* 
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

*/}

{/* NavBar.js */}
{/* 
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
*/}

