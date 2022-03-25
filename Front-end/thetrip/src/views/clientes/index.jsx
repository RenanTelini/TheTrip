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
console.log(clientes)
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
              {clientes.map((clientes) => (
                <tr key={clientes.id_Cliente}>
                  <td>{clientes.id_Cliente}</td>
                  <td>{clientes.nome_Cliente}</td>
                  <td>{clientes.cidade_Cliente}</td>
                  <td>{clientes.estado_Cliente}</td>
                  <td>
                    {clientes.destinos.cidade_Destino} {clientes.destinos.estado_Destino}
                  </td>
                  <td>
                    {clientes.contatos.email_Contato} {clientes.contatos.telefone_Contato}
                  </td>
                  <td>
                    {clientes.promocoes.valor_Promocao}
                  </td>

                  <td className="d-flex">
                    <Link
                      to={`/Clientes-Update/${clientes.id_Cliente}`}
                      className="btn btn-info">
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteClientes(clientes.id_Cliente)}
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