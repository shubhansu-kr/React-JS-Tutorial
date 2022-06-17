import React, { useState } from 'react';

import ThemeContext from './Context/ThemeContext';
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';


const App = () => {
    const themeHook = useState('light');
    return (
        <ThemeContext.Provider value={themeHook}>
            <div>
                <Header></Header>
                <HeroSection></HeroSection>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;


// ThemeContext : 
// import {createContext} from 'react';
// const ThemeContext = createContext(['light', () => {}]);
// export default ThemeContext;

// Theme Toggler : 
// import React, { useContext } from "react";
// import ThemeContext from "../Context/ThemeContext";
// const ThemeToggler = () => {
//     const [themeMode, setThemeMode] = useContext(ThemeContext);
//     return (
//         <div onClick={
//             () => {
//                 setThemeMode(themeMode === 'light' ? 'dark' : 'light');
//             }
//         }>
//             <span>
//                 {themeMode === 'light' ? 'Turn Off' : 'Lights ON'}
//             </span>
//         </div>
//     );
// };
// export default ThemeToggler;

// HeroSection: 
// import React, { useContext } from "react";
// import ThemeContext from "../Context/ThemeContext";
// import AppTheme from '../Colors';

// const HeroSection = () => {
//     const theme = useContext(ThemeContext)[0];
//     const currentTheme = AppTheme[theme];
//     return (
//         <div 
//             style={{
//                 padding: '1rem', 
//                 backgroundColor: `${currentTheme.backgroundColor}`, 
//                 color: `${currentTheme.textColor}`, 
//                 textAlign: `center`
//             }}
//         >
//             <h1>Context API Theme Toggler</h1>
//             <p>lorem ipsum ....</p>
//             <button 
//             style={{ 
//                 backgroundColor: '#26ae60', 
//                 padding : '10px 150px', 
//                 color: '#FFF',
//                 fontSize: '20px', 
//                 border: `${currentTheme.border}`
//             }}
//             >
//             </button>
//         </div>
//     );
// };
// export default HeroSection;

// Header JS
// import React from "react";
// import ThemeToggler from "./ThemeToggler";
// const Header = () => {
//     return (
//         <header>
//             <h1>
//                 Theme Toggler
//             </h1>
//             <ThemeToggler />
//         </header>
//     );
// };
// export default Header;
