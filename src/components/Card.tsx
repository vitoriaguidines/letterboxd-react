import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  imagem: string;
  titulo: string;
  texto2: string;
  footer?: ReactNode;
}

const Card = ({ id, imagem, titulo, texto2, footer }: Props) => {
  return (
    <div
      className="card border-0 mb-4"
      style={{
        backgroundColor: "#2c3440", 
        color: "#99aabb", 
        borderRadius: "8px", 
        overflow: "hidden",
      }}
    >
      {/* Imagem do Produto */}
      <Link to={`/produto/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className="image-container"
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "#3a4454", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imagem}
            className="card-img-top"
            alt="Imagem do produto"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Link>

      {/* Informações do Produto */}
      <div className="card-body">
        <Link to={`/produto/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h5
            id="titulo-card"
            className="card-title"
            style={{
              color: "#ffffff", 
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "600",
            }}
          >
            {titulo}
          </h5>
        </Link>
        <p
          className="card-text fw-bold"
          style={{
            color: "#99aabb", 
            fontSize: "16px",
            margin: "10px 0",
          }}
        >
          R$ {texto2}
        </p>
      </div>

      {/* Footer Personalizado */}
      {footer && <div className="card-footer border-0">{footer}</div>}
    </div>
  );
};

export default Card;
