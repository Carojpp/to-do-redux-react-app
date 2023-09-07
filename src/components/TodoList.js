// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TodoText = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: 1px outset #CCC;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <Checkbox
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <TodoText completed={todo.completed}>
              {todo.name} - {todo.description}
            </TodoText>
            <DeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>
              <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px' }} />
              
              </DeleteButton>
          </TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
