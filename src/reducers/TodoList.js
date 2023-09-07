// src/components/TodoList.js

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.name}</span>
          <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
