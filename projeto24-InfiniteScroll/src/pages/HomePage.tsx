import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import "../index.css";

const HomePage = () => {
  const { data: categorias, isLoading, error } = useCategorias();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  return (
    <div className="row">
      <div className="col-lg-2">
        <h5 style={{ fontWeight: "lighter", color: '#AABBCC', fontSize: '20px' }}>
          Gêneros
        </h5>
        <div className="nav flex-column nav-pills">
          <NavLink
            aria-current="page"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
            style={{
              backgroundColor: location.pathname === '/' ? '#bbccdd' : '',
              fontFamily: 'hbs graphik medium',
              color: location.pathname === '/' ? '#FFFFFF' : '#AABBCC', 
            }}
          >
            Todos
          </NavLink>
          {categorias?.map((categoria) => (
            <NavLink
              className={`nav-link ${location.pathname.includes(`/${categoria.slug}`) ? 'active' : ''}`}
              to={`/${categoria.slug}`}
              key={categoria.id}
              style={{
                backgroundColor: location.pathname.includes(`/${categoria.slug}`) ? '#bbccdd' : '',
                fontFamily: 'hbs graphik medium',
                color: location.pathname.includes(`/${categoria.slug}`) ? '#FFFFFF' : '#AABBCC', 
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

export default HomePage;
