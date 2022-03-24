import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinosService from "../../services/DestinosService";

export default function Create(){
    const [cidade_Destino, setCidade_Destino] = useState("");
    const [estado_Destino, setEstado_Destino] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarDestinos = (e) => {
        e.preventDefault();

        const destinos = { cidade_Destino, estado_Destino };

        if (id) {
            DestinosService.updateDestinos(id, destinos).then((response) => { navigate("/Destinos") })
        } else {
            DestinosService.createDestinos(destinos).then((response) => { navigate("/Destinos") })
        }
    }

    useEffect(() => {
        function getDestinosById(){
            if(id) {
                DestinosService.getDestinosById(id).then((response) => {
                    setCidade_Destino(response.data.cidade_Destino);
                    setEstado_Destino(response.data.estado_Destino);
                }).catch((error) => {console.log(error); })
            }
        } getDestinosById()
    }, [id]);

    return(
        <div className="container py-3">
            <form>
                <filedset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="cidade_Destino" className="form-label">Cidade de destino:</label>
                        <input 
                            type="text" 
                            id="cidade_Destino" 
                            className="form-control" 
                            placeholder="Digite a cidade de destino"
                            value={cidade_Destino}
                            onChange={(e) => setCidade_Destino(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="estado_Destino" className="form-label">Estado de destino:</label>
                        <input type="text" 
                            id="estado_Destino" className="form-control"
                            placeholder="Digite o estado de destino"
                            value={estado_Destino}
                            onChange={(e) => setEstado_Destino(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestinos(e)}>
                        Enviar
                    </button>
                    <Link
                        to="/Destinos"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancelar
                    </Link>
                </filedset>
            </form>
        </div>
    )
}