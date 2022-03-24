import axios from "axios";

const DESTINOS_API_URL = "http://localhost:8080/destinos";

class DestinosSerice {
  getAllDestinos() {
    return axios.get(DESTINOS_API_URL);
  }

  createDestinos(destinos) {
    return axios.post(DESTINOS_API_URL, destinos);
  }

  getDestinosById(destinosId) {
    return axios.get(DESTINOS_API_URL + "/" + destinosId);
  }

  updateDestinos(destinosId, destinos) {
    return axios.put(DESTINOS_API_URL + "/" + destinosId, destinos);
  }

  deleteDestinos(destinosId) {
    return axios.delete(DESTINOS_API_URL + "/" + destinosId);
  }
}

export default new DestinosSerice();