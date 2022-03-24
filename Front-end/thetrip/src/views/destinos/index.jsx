import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinosService from "../../services/DestinosService";

export default function Index() {
    const [destinos, setDestinos] = useState([]);

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

    console.log(destinos)

    const deleteDestinos = (destinosId) => {
        DestinosService.deleteDestinos(destinosId).then((response) => {
            getAllDestinos();
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
                <h1 className="container">Cadastro de Destinos</h1>
            </header>

            <div className="container p-5">
                <Link to="/Destinos-Create" className="btn btn-primary mb-2">Criar Destinos</Link>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cidade de Destino</th>
                                <th>Estado de Destino</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destinos.map((destinos) => (
                                <tr key={destinos.id_Destino}>
                                    <td>{destinos.id_Destino}</td>
                                    <td>{destinos.cidade_Destino}</td>
                                    <td>{destinos.estado_Destino}</td>
                                    <td className="d-flex">
                                        <Link to={`/Destinos-Update/${destinos.id_Destino}`} className="btn btn-info">
                                            Editar
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteDestinos(destinos.id_Destino)}
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