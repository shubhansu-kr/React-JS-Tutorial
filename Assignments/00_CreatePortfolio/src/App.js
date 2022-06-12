import React from "react";

import './styles.css';


import NavBar from "./NavBar";
import MasterHead from "./MasterHead";
import Section from "./PortFolioSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";


const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MasterHead></MasterHead>
            <Section></Section>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default App; 