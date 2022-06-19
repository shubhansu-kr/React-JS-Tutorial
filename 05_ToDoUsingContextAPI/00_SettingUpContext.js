// TO Do Context : 

// import { createContext } from "react";
// const ToDoContext  = createContext();
// export default ToDoContext;


// Action.types.js : Used to list down all the functionalities for better 
// readability of projects. 
// Actions are usually in all Uppercase 

// export const ADD_TODO = "ADD_TODO";
// export const REMOVE_TODO = "REMOVE_TODO"


// Reducer.js 
// Reducer defines what to do when actions are initiated by the user 

import { ADD_TODO, REMOVE_TODO } from "./action.types";
export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case REMOVE_TODO:
            return state.filter(todo => todo !== action.payload);
        default:
            return state;
    }
}