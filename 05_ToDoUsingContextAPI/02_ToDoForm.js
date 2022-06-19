import React, { useContext, useState } from "react";

import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { v4 } from uuid;
import { ToDoContext } from '../context/ToDoContext'
import { ADD_TODO } from "../context/action.types";

const ToDoForm = () => {
    return (
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next ToDo"
                    />
                    <Button color="warning">
                        Add
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

// InputGroupAddon is removed from the package, So remove the element 
// Works just same either way. 

export default ToDoForm;