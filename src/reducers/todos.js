import * as types from '../constants/actionTypes';

const MOCK_TODOS = [
  {
    id: 1,
    title:
      "You need to be strong this morning. Don't forget to eat. It's important", // Make a sandwich
    description:
      "You need to be strong this morning. Don't forget to eat. It's important",
    due: '2018-03-25T08:00:00Z',
    priority: null,
  },
  {
    id: 2,
    title: 'Launch a rocket',
    description:
      "Do it carefully. Last time it's not funny at all. I'm still paying my neighbour for his roof",
    due: '2014-03-25T20:00:00Z',
    priority: 5,
  },
  {
    id: 3,
    title: 'Meet my wife from airport',
    description: 'Buy a coffee before meeting',
    due: '2020-03-25T18:30:00Z',
    priority: null,
  },
  {
    id: 4,
    title: 'Todo',
    description: 'Description of todo',
    due: null,
    priority: 4,
  },
  {
    id: 5,
    title:
      "Make a sandwich", // Make a sandwich
    description:
      "Description of todo description of todo",
    due: '2018-07-12T05:20:00Z',
    priority: 2,
  },
];

let initialState = {
  todos: MOCK_TODOS,
  // todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
