import React from 'react';
import { useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, name: action.payload.name }
                    : todo
            );
        case 'CLEAR_TODOS':
            return [];
        default:
            return state;
    }
}

function Todos() {
    const [state, dispatch] = useReducer(reducer, [{ id: "55555", name: "test 123", status: "in progress", active: true }]);
    const [input, setInput] = useState('');
    const [editInput, setEditInput] = useState('');
    const [editingId, setEditingId] = useState(null);

    const styles = {
        main: {
            padding: '20px',
        },
        title: {
            color: '#5C6AC4',
        },
    };

    const onInputFieldChange = (e) => {
        setInput(e.target.value);
    };

    const addTodoList = () => {
        dispatch({ type: "ADD_TODO", payload: { id: Math.random().toString().slice(-8), name: input, status: "in progress", active: true } });
        setInput('');
    };

    const removeTodo = (todo) => {
        dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } });
    };

    const startEditing = (todo) => {
        setEditingId(todo.id);
        setEditInput(todo.name);
    };

    const saveEdit = () => {
        dispatch({ type: "EDIT_TODO", payload: { id: editingId, name: editInput } });
        setEditingId(null);
        setEditInput('');
    };

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>Add Todo lists!</h1>
            <div>
                Enter Todos:
                <input
                    type="text"
                    data-testid='todos-input-field'
                    value={input}
                    onChange={(e) => onInputFieldChange(e)}
                />
                <button onClick={() => addTodoList()} data-testid='add-button'>
                    Add to list
                </button>
            </div>
            <ul>
                {state.map((todo, index) => (
                    <li key={index}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editInput}
                                    onChange={(e) => setEditInput(e.target.value)}
                                />
                                <button onClick={() => saveEdit()}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo.id}: {todo.name}
                                <button onClick={() => startEditing(todo)}>Edit</button>
                                <button onClick={() => removeTodo(todo)}>Remove Todo</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
