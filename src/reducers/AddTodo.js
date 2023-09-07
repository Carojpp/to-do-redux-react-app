// src/components/AddTodo.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre de la tarea"
        value={task.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción detallada"
        value={task.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
