// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.name} - {todo.description}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

