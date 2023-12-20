import React from "react";
import { Link } from "react-router-dom";
import letterboxdLogo from "/logo-letterboxd.png";
import useProdutosPaginados from "../hooks/useProdutosPaginados";
import useProdutoStore from "../store/produtoStore";
import Produto from "../interfaces/produto";

function NavBar() {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);
  const setProdutoSelecionado = useProdutoStore((state) => state.setProdutoSelecionado);

  const { data: produtosPaginados, isLoading, error } = useProdutosPaginados({
    pagina,
    tamanho,
    nome,
  });

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  const produtos = produtosPaginados!.itens;

  const limparInformacoes = () => {
    setProdutoSelecionado({} as Produto);
  };

  return (
    <div
      className="navbar-container"
      style={{ backgroundColor: "#14181c", paddingTop: "3px" }}
    >
      <div className="container mt-3 mb-2">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-3 d-flex align-items-center mb-3">
            <Link to="/" style={{ textDecoration: "none", fontSize: "16px" }}>
              <img
                className="d-none d-md-block"
                src={letterboxdLogo}
                style={{ width: "250px" }}
                alt="Logo Letterboxd"
              />
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <ul
              className="list-unstyled d-flex"
              style={{
                listStyleType: "none",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#99aabb",
              }}
            >
              <li className="ms-2" style={{ marginRight: "10px" }}>
                ACESSE SEU
                <Link
                  className="ms-1"
                  to="/login"
                  style={{ textDecoration: "none", color: "#99aabb" }}
                >
                  PERFIL
                </Link>
              </li>
              <li className="ms-2" style={{ marginRight: "10px" }}>
                <Link
                  to="/cadastrar-produto"
                  style={{ textDecoration: "none", color: "#99aabb" }}
                >
                  CADASTRO
                </Link>
              </li>
              <li className="ms-2" style={{ marginRight: "10px" }}>
              <Link
                to="/listar-produtos"
                onClick={limparInformacoes}
                style={{ textDecoration: "none", color: "#99aabb" }}
              >
                LIST
              </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end">
            <ul style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
              <li className="mr-2" style={{ color: "#fff", backgroundColor: "#00ac1c", padding: "2px 10px", borderRadius: "4px", display: "inline-block" }}>
                <Link
                  to="/carrinho"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontFamily: "inherit",
                    fontWeight: "bold"
                  }}
                >
                  CARRINHO
                </Link>
                {" "}
                R${" "}
                {produtos
                  .reduce(
                    (total, produto) =>
                      produto.qtdEstoque * produto.preco + total,
                    0
                  )
                  .toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
