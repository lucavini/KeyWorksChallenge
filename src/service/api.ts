import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kanban-back2.azurewebsites.net/',
});

export default api;
