const API_URL = 'https://6093887fa7e53a001795105a.mockapi.io/demo/api/todos';

function getHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
}

function todosApi(url, config) {
  const defaultConfig = {
    headers: getHeaders()
  };
  return fetch(url, {...defaultConfig, ...config})
  .then(response => response.json())
}

const todoService = {

  getAll: (page = 1, limit = 10) => {
    return todosApi(`${API_URL}?p=${page}&l=${limit}`);
  },

  addTodo: (todo) => {
    return todosApi(API_URL, {
      method: 'POST',
      body: JSON.stringify(todo)
    })
  },

  removeTodo: (id) => {
    return todosApi(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
  },

  changeStatus: (id, todo) => {
    return todosApi(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todo)
    });
  }

}

export default todoService;
