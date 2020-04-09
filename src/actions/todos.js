import * as types from '../constants/actionTypes';
import * as endpoints from '../configs';

export const getTodos = () => {
  return {
    endpoint: endpoints.getTodos,
    method: 'GET',
    types: [
      types.GET_TODOS_REQUEST,
      types.GET_TODOS_SUCCESS,
      types.GET_TODOS_FAILURE,
    ],
  };
};

export const addTodo = body => {
  return {
    endpoint: endpoints.addTodo,
    method: 'POST',
    types: [
      types.ADD_TODO_REQUEST,
      types.ADD_TODO_SUCCESS,
      types.ADD_TODO_FAILURE,
    ],
    body,
  };
};

export const editTodo = (id, body) => {
  return {
    endpoint: endpoints.editTodo(id),
    method: 'POST',
    types: [
      types.EDIT_TODO_REQUEST,
      types.EDIT_TODO_SUCCESS,
      types.EDIT_TODO_FAILURE,
    ],
    id, // TODO: delete this later
    body,
  };
};

export const deleteTodo = id => {
  return {
    endpoint: endpoints.deleteTodo(id),
    method: 'POST',
    types: [
      types.DELETE_TODO_REQUEST,
      types.DELETE_TODO_SUCCESS,
      types.DELETE_TODO_FAILURE,
    ],
    id // TODO: delete this later
  };
};
