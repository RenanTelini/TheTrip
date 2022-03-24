import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PromocoesService from "../../services/PromocoesService";

export default function Create() {
  const [valor_Promocao, setValor_Promocao] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPromocoes = (e) => {
    e.preventDefault();

    const promocoes = { valor_Promocao };

    console.log(promocoes)

    if (id) {
      PromocoesService.updatePromocoes(id, promocoes).then((response) => { navigate("/Promocoes") });

    } else {
      PromocoesService.createPromocoes(promocoes).then((response) => { navigate("/Promocoes") })
    }
  }

  useEffect(() => {
    function getPromocoesById() {
      if (id) {
        PromocoesService.getPromocoesById(id).then((response) => {
          setValor_Promocao(response.data.valor_Promocao);
        }).catch((error) => { console.log(error); })
      }
    } getPromocoesById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Valor" className="form-label">Valor:
            </label>
            <input
              type="number"
              id="valor_Promocao"
              className="form-control"
              placeholder="Digite o valor da promoção em R$"
              value={valor_Promocao}
              onChange={(e) => setValor_Promocao(Number.parseFloat(e.target.value))}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPromocoes(e)}>
            Enviar
          </button>
          <Link
            to="/Promocoes"
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