// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name && description) {
      dispatch(addTodo({
        id: new Date().getTime(),
        name,
        description,
        completed: false,
      }));
      setName('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
};

export default TodoForm;
