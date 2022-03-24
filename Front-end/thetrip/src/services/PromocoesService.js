import axios from "axios";

const PROMOCOES_API_URL = "http://localhost:8080/promocoes";

class PromocoesService {
  getAllPromocoes() {
    return axios.get(PROMOCOES_API_URL);
  }

  createPromocoes(promocoes) {
    return axios.post(PROMOCOES_API_URL, promocoes);
  }

  getPromocoesById(promocoesId) {
    return axios.get(PROMOCOES_API_URL + "/" + promocoesId);
  }

  updatePromocoes(promocoesId, promocoes) {
    return axios.put(PROMOCOES_API_URL + "/" + promocoesId, promocoes);
  }

  deletePromocoes(promocoesId) {
    return axios.delete(PROMOCOES_API_URL + "/" + promocoesId);
  }
}

export default new PromocoesService();