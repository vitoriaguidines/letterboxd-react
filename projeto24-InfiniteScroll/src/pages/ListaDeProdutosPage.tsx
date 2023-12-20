import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CadastroDeProdutosForm from "../components/CadastroDeProdutosForm";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import TabelasDeProdutos from "../components/TabelasDeProdutos";
import useProdutoStore from "../store/produtoStore";

const ListaDeProdutosPage = () => {
  const location = useLocation();
  const produtoSelecionado = location.state?.produto;

  const setProdutoSelecionado = useProdutoStore(
    (state) => state.setProdutoSelecionado
  );

  useEffect(() => {
    if (produtoSelecionado) {
      setProdutoSelecionado(produtoSelecionado);
    }
  }, [produtoSelecionado, setProdutoSelecionado]);

  return (
    <>
      <div className="mb-4">
        <h5 style={{ color: "#aabbcc", fontFamily: "Arial, sans-serif" }}>
          Cadastro de Produtos
        </h5>
        <hr className="mt-0" />
      </div>

      <CadastroDeProdutosForm />

      <div className="mb-4">
        <h5 style={{ color: "#aabbcc", fontFamily: "Arial, sans-serif" }}>
          Lista de Produtos
        </h5>
        <hr className="mt-0" />
      </div>

      <Pesquisa />
      <TabelasDeProdutos />
      <Paginacao />
    </>
  );
};

export default ListaDeProdutosPage;
