import React, { useContext, useState } from "react";

import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
} from 'reactstrap';

import ToDoContext from '../context/ToDoContext'
import {ADD_TODO} from "../context/action.types";

var x = 0;

const ToDoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(ToDoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please Pass a Valid ToDo (Can't be empty)");
        }

        const todo = {
            todoString,
            id: ++x
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next ToDo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <Button color="warning">
                        Add
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default ToDoForm;