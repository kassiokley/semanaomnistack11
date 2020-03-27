//Importando o Axios
import axios from  'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

//Exportando API
export default api;