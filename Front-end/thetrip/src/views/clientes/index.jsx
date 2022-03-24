import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClientesService from "../../services/ClientesService";

export default function Index() {
  const [clientes, setClientes] = useState([]);

  const getAllClientes = () => {
    ClientesService.getAllClientes().then((response) => {
      setClientes(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  const deleteClientes = (clientesId) => {
    ClientesService.deleteClientes(clientesId).then((response) => {
      getAllClientes();
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro de Clientes</h1>
      </header>
      <div className="container-fluid">
        <Link to="/Clientes-Create" className="btn btn-primary mb-2">
          Criar Cliente
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Cidade de partida</th>
                <th>Estado de partida</th>
                <th>Destino</th>
                <th>Contato</th>
                <th>Valor R$</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id_Cliente}>
                  <td>{cliente.id_Cliente}</td>
                  <td>{cliente.nome_Cliente}</td>
                  <td>{cliente.cidade_Cliente}</td>
                  <td>{cliente.estado_Cliente}</td>
                  <td>
                    {cliente.destinos.cidade_Destino} {cliente.destinos.estado_Destino}
                  </td>
                  <td>
                    {cliente.contatos.email_Contato} {cliente.contatos.telefone_Contato}
                  </td>
                  <td>
                    {cliente.promocoes.valor_Promocao}
                  </td>

                  <td className="d-flex">
                    <Link
                      to={`/Clientes-Update/${cliente.id_Cliente}`}
                      className="btn btn-info">
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteClientes(cliente.id_Cliente)}
                      style={{ marginLeft: "10px" }} >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}