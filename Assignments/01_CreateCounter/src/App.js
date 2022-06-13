import { React, useState } from 'react';

import './App.css';

const App = () => {

    const [count, setCount] = useState(10);
    // count is the variable ans setCount is function which will
    // be responsible for updating the var count.

    // Put default value of count(variable) in useState parameters 

    // Whenever there is a change in the state variable, React renders 
    // the particular component again without actually refreshing the page.

    return (
        <div className='App'>
            <header>
                <h1>Counter App using state/hooks</h1>
            </header>
            <h2>Count : {count} </h2>
            {/* Set initial val to 10, range [0, 20] */}
            <button onClick={() => setCount(10)}>Reset Counter</button>
            <button onClick={() => count === 20 ? setCount(20) : setCount(count + 1)}>Increase Counter</button>
            <button onClick={() => count === 0 ? setCount(0) : setCount(count - 1)}>Decrease Counter</button>
        </div>
    );
}

export default App;

