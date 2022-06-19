import React, { useReducer } from 'react';
import { Container } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

import ToDoContext from "./context/ToDoContext";
import ToDoReducer from "./context/reducer";

const App = () => {
    const [todos, dispatch] = useReducer(ToDoReducer, []);
    return (
        <ToDoContext.Provider value={{ todos, dispatch }}>
            <Container fluid>
                <h1>
                    ToDo App with context API
                </h1>
            </Container>
        </ToDoContext.Provider>
    );
};

export default App;