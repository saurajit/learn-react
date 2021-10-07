const API_URL = 'https://6093887fa7e53a001795105a.mockapi.io/demo/api/todos';

const todoService = {

  getAll: (page = 1, limit = 10) => {
    return fetch(`${API_URL}?p=${page}&l=${limit}`);
  },

  addTodo: (todo) => {
    return fetch(API_URL, {
      method: 'POST',
      body: todo
    })
  },

  removeTodo: (id) => {
    return fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
  },

  changeStatus: (id, status = false) => {
    return fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: {status}
    });
  }

}

export default todoService;
