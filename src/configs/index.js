export const login = `/login`;

export const getTodos = '/get';
export const addTodo = '/add';
export const editTodo = id => `/edit/${id}`;
export const deleteTodo = id => `/delete/${id}`;

export const REQUEST_TIMEOUT = 20000;
export const BASE_URL = 'https://portal.poimapper.com/json/auth/todo';
