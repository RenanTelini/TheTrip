import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClientesService from "../../services/ClientesService";
import ContatosService from "../../services/ContatosService";
import DestinosService from "../../services/DestinosService";
import PromocoesService from "../../services/PromocoesService";

export default function Create() {
  const [nome_Cliente, setNome_Cliente] = useState("");
  const [cidade_Cliente, setCidade_Cliente] = useState("");
  const [estado_Cliente, setEstado_Cliente] = useState("");

  const [destino, setDestino] = useState({ id_Destino: "", cidade_Destino: "", estado_Destino: "" });
  const [contato, setContato] = useState({ id_Contato: "", email_Contato: "", telefone_Contato: "" });
  const [promocao, setPromocao] = useState({ id_Promocao: "", valor_Promocao: "" });

  const [contatos, setContatos] = useState([]);
  const [destinos, setDestinos] = useState([]);
  const [promocoes, setPromocoes] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const getAllContatos = () => {
    ContatosService.getAllContatos().then((response) => {
      setContatos(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllContatos();
  }, []);

  const getAllDestinos = () => {
    DestinosService.getAllDestinos().then((response) => {
      setDestinos(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const getAllPromocoes = () => {
    PromocoesService.getAllPromocoes().then((response) => {
      setPromocoes(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllPromocoes();
  }, []);


  const criarOuEditarCliente = (e) => {
    const clientes = { cidade_Cliente, estado_Cliente, nome_Cliente, contato, destino, promocao };

    console.log(clientes)

    if (id) {
      ClientesService.updateClientes(id, clientes).then((response) => {
        navigate("/Clientes");
      });
    } else {
      ClientesService.createClientes(clientes).then((response) => {
        navigate("/Clientes");
      });
    }
  };

  useEffect(() => {
    function getClientesById() {
      if (id) {
        ClientesService.getClientesById(id).then((response) => {
          setNome_Cliente(response.data.nome_Cliente);
          setCidade_Cliente(response.data.cidade_Cliente);
          setEstado_Cliente(response.data.estado_Cliente);
          setDestino({
            id_Destino: response.data.destinos.id_Destino,
            cidade_Destino: response.data.destinos.cidade_Destino,
            estado_Destino: response.data.destinos.estado_Destino,
          });
          setContato({
            id_Contato: response.data.contatos.id_Contato,
            email_Contato: response.data.contatos.email_Contato,
            telefone_Contato: response.data.contatos.telefone_Contato,
          });
          setPromocao({
            id_Promocao: response.data.promocoes.id_Promocao,
            valor_Promocao: response.data.valor_Promocao,
          });
        }).catch((error) => {
          console.log(error);
        });
      }
    }
    getClientesById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="tex-center">{id ? "Editar" : "Criar"}</h2>
          </legend>

          <div className="form-group mb-3">
            <label htmlFor="nome_Cliente" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="nome_Cliente"
              className="form-control"
              placeholder="Digite o nome do passageiro(a):"
              value={nome_Cliente}
              onChange={(e) => setNome_Cliente(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="cidade_Cliente" className="form-label">
              Cidade de partida
            </label>
            <input
              type="text"
              id="cidade_Cliente"
              className="form-control"
              placeholder="Digite a cidade de partida:"
              value={cidade_Cliente}
              onChange={(e) => setCidade_Cliente(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="estado_Cliente" className="form-label">
              Estado de partida
            </label>
            <input
              type="text"
              id="estado_Cliente"
              className="form-control"
              placeholder="Digite o estado de partida:"
              value={estado_Cliente}
              onChange={(e) => setEstado_Cliente(e.target.value)}
            />
          </div>

          {/*--------- Destinos ---------*/}
          <div className="form-group mb-3">
            <label htmlFor="DestinoId_destino" className="form-label">
              Indo para
            </label>
            <select
              id="DestinoId_destino"
              name="DestinoId_destino"
              className="form-select"
              onChange={(e) =>
                setDestino({ id_Destino: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT">{id ? destino.cidade_Destino : 'Escolha um destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.id_Destino} values={destino.id_Destino}>
                  {destino.cidade_Destino} - {destino.estado_Destino}
                </option>
              ))}
            </select>
          </div>

          {/*--------- Contatos ---------*/}
          <div className="form-group mb-3">
            <label htmlFor="ContatoId_contato" className="form-label">
              Contatos
            </label>
            <select
              id="ContatoId_contato"
              name="ContatoId_contato"
              className="form-select"
              onChange={(e) => setContato({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value={"DEFAULT"}>{id ? contato.email_Contato : 'Escolha um contato'}</option>
              {contatos.map((contato) => (
                <option key={contato.id_Contato} value={contato.id_Contato}>
                  {contato.email_Contato} - {contato.telefone_Contato}
                </option>
              ))}
            </select>
          </div>


          {/*--------- Promoções ---------*/}
          <div className="form-grou mb-3">
            <label htmlFor="PromocaoId_promocao" className="form-labe">
              Promoções
            </label>
            <select
              id="PromocaoId_promocao"
              name="PromocaoId_promocao"
              className="form-select"
              onChange={(e) =>
                setPromocao({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT">{id ? promocao.valor_Promocao : 'Escolha uma promoção'}</option>
              {promocoes.map((promocao) => (
                <option key={promocao.id_Promocao} value={promocao.id_Promocao}>
                  {promocao.valor_Promocao}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarCliente(e)}
          >
            Enviar
          </button>
          <Link
            to="/Clientes"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}