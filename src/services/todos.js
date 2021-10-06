const API_URL = 'https://6093887fa7e53a001795105a.mockapi.io/demo/api/todos';

const todoService = {

  getAll: (page = 1, limit = 10) => {
    return fetch(`${API_URL}?p=${page}&l=${limit}`);
  }
}

export default todoService;
