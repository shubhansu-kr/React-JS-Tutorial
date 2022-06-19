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
                    <InputGroupAddon addonType="prepend">
                        <Button color="warning">
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default ToDoForm;