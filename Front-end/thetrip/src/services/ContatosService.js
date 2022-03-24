import axios from "axios";

const CONTATOS_API_URL = "http://localhost:8080/contatos";

class ContatosService {
  getAllContatos() {
    return axios.get(CONTATOS_API_URL);
  }

  createContatos(contatos) {
    return axios.post(CONTATOS_API_URL, contatos);
  }

  getContatosById(contatosId) {
    return axios.get(CONTATOS_API_URL + "/" + contatosId);
  }

  updateContatos(contatosId, contatos) {
    return axios.put(CONTATOS_API_URL + "/" + contatosId, contatos);
  }

  deleteContatos(contatosId) {
    return axios.delete(CONTATOS_API_URL + "/" + contatosId);
  }
}

export default new ContatosService();