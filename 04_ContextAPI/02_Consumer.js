import React, { Fragment } from 'react';

import Provider from './Provider.js';
import Context from './Context.js';

const Agents = () => {
    return <AgentOne />;
};

const AgentOne = () => {
    return <AgentTwo />;
};

const AgentTwo = () => {
    return <AgentBond />;
};

const AgentBond = () => {
    return (
        <Context.Consumer>
            {
                context => (
                    <Fragment>
                        <h3>Classified Information</h3>
                        <p>
                            MissionName: {context.data.mName}
                            AgentCode: {context.data.agent}
                            MissionStatus: {context.data.accept}
                        </p>
                        <button onClick={context.isMissionAccepted}>Accept Mission</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    );
};


const App = () => {
    return (
        <div>
            <h1> Context API </h1>
            <Provider>
                <Agents />
            </Provider>
        </div>
    );
};

export default App;