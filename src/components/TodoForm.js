// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: 1,5px outset #CCC;
  padding: 5px 10px;
  cursor: pointer;
  display: flex-end;
  align-items: center;
`;

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
    <FormContainer>
      <h2>Adicionar Tarea</h2>
      <Input
        type="text"
        placeholder="Nombre de la tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <AddButton onClick={handleSubmit}>
    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
    Agregar
    </AddButton>
    </FormContainer>
  );
};

export default TodoForm;
