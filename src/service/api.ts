import axios from 'axios';

const api = axios.create({
  baseURL: 'http://kanban-back2.eba-fr8ukxqm.us-east-2.elasticbeanstalk.com',
});

export default api;
