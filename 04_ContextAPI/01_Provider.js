import React, { useState } from "react";

import PackageContext from './Context.js';

const Provider = props => {
    const [mission, setMission] = useState({
        mName: 'Impossible',
        agent: 007,
        accept: 'Not Accepted'
    });
    return (
        <PackageContext.Provider value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({ ...mission, accept: "Accepted" })
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    );
};

// Context.js 
/* 
import {React} from 'react' ;

export default React.createContext();

// createContext is an API of react to create context
*/