import axios from "axios";

const CLIENTES_API_URL = "http://localhost:8080/clientes";

class ClientesService {
  getAllClientes() {
    return axios.get(CLIENTES_API_URL);
  }

  createClientes(clientes) {
    return axios.post(CLIENTES_API_URL, clientes);
  }

  getClientesById(clientesId) {
    return axios.get(CLIENTES_API_URL + "/" + clientesId);
  }

  updateClientes(clientesId, clientes) {
    return axios.put(CLIENTES_API_URL + "/" + clientesId, clientes);
  }

  deleteClientes(clientesId) {
    return axios.delete(CLIENTES_API_URL + "/" + clientesId);
  }
}

export default new ClientesService();