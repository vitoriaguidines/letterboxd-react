import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import letterboxdLogo from "/logo-letterboxd.png";
import useItemCarrinho from "../hooks/useItemCarrinho";

function NavBar() {
  const { data: itens, isLoading, error } = useItemCarrinho();
  const [totalValorCarrinho, setTotalValorCarrinho] = useState(0);

  useEffect(() => {
    // Calcula o valor total do carrinho
    const calcularValorTotal = () => {
      if (itens) {
        const total = itens.reduce(
          (acc, item) => acc + item.quantidade * item.produto.preco,
          0
        );
        setTotalValorCarrinho(total);
      }
    };

    calcularValorTotal();
  }, [itens]);

  if (isLoading) return <h6>Carregando...</h6>;
  if (error) throw error;

  return (
    <div
      className="navbar-container"
      style={{ backgroundColor: "#14181c", paddingTop: "3px", paddingBottom: "3px" }}
    >
      <div className="container mt-3 mb-2">
        <div className="row d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="col-3 d-flex align-items-center mb-3">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={letterboxdLogo}
                style={{ width: "250px" }}
                alt="Logo Letterboxd"
              />
            </Link>
          </div>

          {/* Navegação */}
          <div className="col-6 d-flex justify-content-center align-items-center">
            <ul
              className="list-unstyled d-flex"
              style={{
                listStyleType: "none",
                fontFamily: "Graphik, sans-serif",
                fontWeight: "bold",
                color: "#99aabb",
              }}
            >
              <li className="ms-2" style={{ marginRight: "20px" }}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#99aabb" }}
                >
                  PERFIL
                </Link>
              </li>
              <li className="ms-2" style={{ marginRight: "20px" }}>
                <Link
                  to="/cadastrar-produto"
                  style={{ textDecoration: "none", color: "#99aabb" }}
                >
                  CADASTRO
                </Link>
              </li>
              <li className="ms-2" style={{ marginRight: "20px" }}>
  <Link
    to="/journal"
    style={{ textDecoration: "none", color: "#99aabb" }}
  >
    JOURNAL
  </Link>
</li>

            </ul>
          </div>

          {/* Carrinho */}
          <div className="col-3 d-flex align-items-center justify-content-end">
            <div
              style={{
                color: "#fff",
                backgroundColor: "#00ac1c",
                padding: "5px 15px",
                borderRadius: "4px",
              }}
            >
              <Link
                to="/carrinho"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "Graphik, sans-serif",
                  fontWeight: "bold",
                }}
              >
                CARRINHO R${" "}
                {totalValorCarrinho.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
