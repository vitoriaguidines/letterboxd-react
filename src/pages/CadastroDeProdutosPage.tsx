import { useNavigate } from "react-router-dom";
import CadastroDeProdutosForm from "../components/CadastroDeProdutosForm";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import TabelasDeProdutos from "../components/TabelasDeProdutos";

const CadastroDeProdutosPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <>
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h5>Cadastro de Produtos</h5>

        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <hr className="mt-0" />

      <CadastroDeProdutosForm />

      <div className="mb-4">
        <h5>Lista de Produtos</h5>
        <hr className="mt-0" />
      </div>

      <Pesquisa />
      <TabelasDeProdutos />
      <Paginacao />
    </>
  );
};

export default CadastroDeProdutosPage;
