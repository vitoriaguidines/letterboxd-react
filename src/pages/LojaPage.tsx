import { NavLink, Outlet, useLocation } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import "../index.css";

const LojaPage = () => {
  const { data: categorias, isLoading, error } = useCategorias();
  const location = useLocation();

  if (isLoading) return <h6>Carregando...</h6>;
  if (error) throw error;

  return (
    <div className="row">
      <div className="col-lg-2">
        <h5 style={{ fontWeight: "lighter", color: "#AABBCC", fontSize: "20px" }}>
          Categorias
        </h5>
        <div className="nav flex-column nav-pills">
          <NavLink
            aria-current="page"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
            style={{
              backgroundColor: location.pathname === "/" ? "#bbccdd" : "",
              fontFamily: "hbs graphik medium",
              color: location.pathname === "/" ? "#FFFFFF" : "#AABBCC",
            }}
          >
            Todos
          </NavLink>

          {categorias?.map((categoria) => (
            <NavLink
              key={categoria.id}
              className={`nav-link ${
                location.pathname === `/${categoria.slug}` ? "active" : ""
              }`}
              to={`/${categoria.slug}`}
              style={{
                backgroundColor: location.pathname === `/${categoria.slug}` ? "#bbccdd" : "",
                fontFamily: "hbs graphik medium",
                color: location.pathname === `/${categoria.slug}` ? "#FFFFFF" : "#AABBCC",
              }}
            >
              {categoria.nome}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="col-lg-10">
        <Outlet />
      </div>
    </div>
  );
};

export default LojaPage;
