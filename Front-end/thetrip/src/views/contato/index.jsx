import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContatosService from "../../services/ContatosService";

export default function Index() {
    const [contatos, setContatos] = useState([]);

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

    console.log(contatos)

    const deleteContatos = (contatosId) => {
        ContatosService.deleteContatos(contatosId).then((response) => {
            getAllContatos();
        }).cath((error) => {
            console.log(error);
            const { data } = error.response;
            if (data.status === 500) {
                alert("Erro na API");
            }
        });
    };

    return (
        <>
            <header className="header">
                <h1 className="container">Cadastro de Contatos</h1>
            </header>

            <div className="container p-5">
                <Link to="/Contatos-Create" className="btn btn-primary mb-2">Criar Contato</Link>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contatos.map((contatos) => (
                                <tr key={contatos.id_Contato}>
                                    <td>{contatos.id_Contato}</td>
                                    <td>{contatos.email_Contato}</td>
                                    <td>{contatos.telefone_Contato}</td>
                                    <td className="d-flex">
                                        <Link to={`/Contatos-Update/${contatos.id_Contato}`} className="btn btn-info">
                                            Editar
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteContatos(contatos.id_Contato)}
                                            style={{ marginLeft: "10px" }}
                                        >Deletar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}