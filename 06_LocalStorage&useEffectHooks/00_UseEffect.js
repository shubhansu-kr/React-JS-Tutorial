import React, {useState} from 'react';
import {
    FormGroup,
    Input,
    InputGroup, 
    InputGroupAddon,
    Button, 
    Form,
    Conatiner
} from 'reactstrap';

import {v4} from uuid; 

const TodoForm = (addTodos) =>{
    const [todoString, setTodoString] = useState(''); 

    const handleSubmit = e =>{
        e.preventDefault();
        if (todoString === '') {
            return alert('Please Enter ToDo first');
        }
        const todo = {
            todoString, 
            id: v4(),
        }

        addTodos(todo);
        
        setTodoString('');
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                    type='text'
                    name='ToDo'
                    id='todo'
                    placeholder='Enter a Todo'
                    value={todoString}
                    onChange = {e=> setTodoString(e.target.value)}
                ></Input>
                <Button
                    color='success'

                >
                    Add ToDo
                </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;