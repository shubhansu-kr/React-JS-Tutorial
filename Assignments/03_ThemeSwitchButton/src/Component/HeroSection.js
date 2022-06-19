import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import AppTheme from '../Colors';

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <div 
            style={{
                padding: '1rem', 
                backgroundColor: `${currentTheme.backgroundColor}`, 
                color: `${currentTheme.textColor}`, 
                textAlign: `center`
            }}
        >
            <h1>Context API Theme Toggler</h1>
            <p>lorem ipsum ....</p>
            <button 
            style={{ 
                backgroundColor: '#26ae60', 
                padding : '10px 150px', 
                color: '#FFF',
                fontSize: '20px', 
                border: `${currentTheme.border}`
            }}
            >
                
            </button>
        </div>
    );

};

export default HeroSection;