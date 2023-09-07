// src/reducers/todos.js

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: new Date().getTime(),
          name: action.payload.name,
          description: action.payload.description,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todosReducer;
