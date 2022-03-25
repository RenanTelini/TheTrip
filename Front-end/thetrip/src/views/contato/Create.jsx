import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContatosService from "../../services/ContatosService";

export default function Create() {
    const [email_Contato, setEmail_Contato] = useState("");
    const [telefone_Contato, setTelefone_Contato] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarContatos = (e) => {
        e.preventDefault();

        const contato = { email_Contato, telefone_Contato };

        if (id) {
            ContatosService.updateContatos(id, contato).then((response) => { navigate("/Contatos") })
        } else {
            ContatosService.createContatos(contato).then((response) => { navigate("/Contatos") })
        }
    }

    useEffect(() => {
        function getContatosById() {
            if (id) {
                ContatosService.getContatosById(id).then((response) => {
                    setEmail_Contato(response.data.email_Contato);
                    setTelefone_Contato(response.data.telefone_Contato);
                }).catch((error) => { console.log(error); })
            }
        } getContatosById()
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="email_Contato" className="form-label">E-mail:
                        </label>
                        <input
                            type="text"
                            id="email_Contato"
                            className="form-control"
                            placeholder="Digite seu e-mail para contato"
                            value={email_Contato}
                            onChange={(e) => setEmail_Contato(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefone_Contato" className="form-label">Telefone:
                        </label>
                        <input type="text"
                            id="telefone_Contato" className="form-control"
                            placeholder="Digite seu telefone para contato"
                            value={telefone_Contato}
                            onChange={(e) => setTelefone_Contato(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarContatos(e)}>
                        Enviar
                    </button>
                    <Link
                        to="/Contatos"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancelar
                    </Link>

                </fieldset>
            </form>
        </div>
    )
}