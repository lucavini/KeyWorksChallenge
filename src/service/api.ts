import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://backkanban2-env.eba-xpytrdmw.us-east-2.elasticbeanstalk.com/',
});

export default api;
