import { React, useState } from 'react';

// Rendring child inside grandchild
// Grand child is not using the props but we are passing the props so that 
// it can further pass on the props to the child component
// This causes inconvenience and called props drilling

// Thus we store all the state at a seprate place which is accessible by 
// everyone just like global vars 

const GrandChild = (props) => {
    return (
        <div>
            <h3>
                GrandChild:

                {/* GrandChild does not know what brandName is so we need
                to pass the parameter as prop in grandchild first */}
                {/* <Child brand=brandName></Child> */}
                {/* <Child brand={brand.brand}></Child> */}
                <Child brand={props.brand}></Child>
            </h3>
        </div>
    );
};


// {brand} is used to pass a parameter, however under the hood 
// props is passed whose member is brand
// props.brand

// const Child = ({brand}) => {
const Child = (props) => {
    return (
        <div>
            <h2>
                Child: {props.brand};
            </h2>
        </div>
    );
};

const App = () => {
    // setBrand if you need to change stuff 
    // const [brand, setBrand] = useState("Levis") ;
    const [brandName] = useState("Levis");

    return (
        <div>
            <h1>Hello</h1>
            {/* <Child brand={brandName} /> */}
            <GrandChild brand={brandName} ></GrandChild>
        </div>
    );
};

export default App;