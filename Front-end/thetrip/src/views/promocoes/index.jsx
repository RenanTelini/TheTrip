import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PromocoesService from "../../services/PromocoesService";

export default function Index() {
    const [promocoes, setPromocoes] = useState([]);

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

    console.log(promocoes)

    const deletePromocoes = (promocoesId) => {
        PromocoesService.deletePromocoes(promocoesId).then((response) => {
            getAllPromocoes();
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
                <h1 className="container">Cadastro de Promoções</h1>
            </header>

            <div className="container p-5">
                <Link to="/Promocoes-Create" className="btn btn-primary mb-2">Criar Promoção</Link>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Promoção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {promocoes.map((promocoes) => (
                                <tr key={promocoes.id_Promocao}>
                                    <td>{promocoes.id_Promocao}</td>
                                    <td>{promocoes.valor_Promocao}</td>
                                    <td className="d-flex">
                                        <Link to={`/Promocoes-Update/${promocoes.id_Promocao}`} className="btn btn-info">
                                            Editar
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deletePromocoes(promocoes.id_Promocao)}
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