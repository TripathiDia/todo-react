import TodoForm from "./TodoForm";
import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
    }

    const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    );
}

export default TodoList;