import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div onClick={
            () => {
                setThemeMode(themeMode === 'light' ? 'dark' : 'light');
            }
        }>
            <button
                style={{
                    backgroundColor: '#26ae60',
                    padding: '10px 150px',
                    color: '#FFF',
                    fontSize: '20px',
                }}
            >
                {themeMode === 'light' ? 'Day' : 'Night'}
            </button>
        </div>
    );
};

export default ThemeToggler;