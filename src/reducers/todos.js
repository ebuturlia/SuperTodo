import * as types from '../constants/actionTypes';
import {v4 as uuidv4} from 'uuid';

const MOCK_TODOS = [
  {
    id: uuidv4(),
    title:
      "You need to be strong this morning. Don't forget to eat. It's important", // Make a sandwich
    description:
      "You need to be strong this morning. Don't forget to eat. It's important",
    due: '2018-03-25T08:00:00Z',
    priority: null,
  },
  {
    id: uuidv4(),
    title: 'Launch a rocket',
    description:
      "Do it carefully. Last time it's not funny at all. I'm still paying my neighbour for his roof",
    due: '2014-03-25T20:00:00Z',
    priority: 5,
  },
  {
    id: uuidv4(),
    title: 'Meet my wife from airport',
    description: 'Buy a coffee before meeting',
    due: '2020-03-25T18:30:00Z',
    priority: null,
  },
  {
    id: uuidv4(),
    title: 'Todo',
    description: 'Description of todo',
    due: null,
    priority: 4,
  },
  {
    id: uuidv4(),
    title: 'Make a sandwich', // Make a sandwich
    description: 'Description of todo description of todo',
    due: '2018-07-12T05:20:00Z',
    priority: 2,
  },
];

let initialState = {
  fetching: false,
  todos: MOCK_TODOS,
  // todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.result.todos,
      };
    case types.GET_TODOS_FAILURE:
      return {
        ...state,
        fetching: false,
      };

    case types.ADD_TODO_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.ADD_TODO_FAILURE: {
      return {
        ...state,
        fetching: false,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            ...action.body,
          },
        ],
      };
    }

    case types.EDIT_TODO_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case types.EDIT_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.EDIT_TODO_FAILURE: {
      const tempTodos = [...state.todos];
      const editedItemIndex = tempTodos.findIndex(
        item => item.id === action.id,
      );

      if (editedItemIndex === -1) return {...state, fetching: false};

      tempTodos[editedItemIndex] = {
        ...tempTodos[editedItemIndex],
        ...action.body,
      };

      return {
        ...state,
        fetching: false,
        todos: tempTodos,
      };
    }

    case types.DELETE_TODO_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.DELETE_TODO_FAILURE: {
      const tempTodos = state.todos.filter(item => item.id === action.id);
      return {
        ...state,
        fetching: false,
        todos: tempTodos
      };
    }
    default:
      return state;
  }
};

export default todos;
