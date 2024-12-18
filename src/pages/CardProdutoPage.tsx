import { NavLink, useParams } from "react-router-dom";
import useProdutoPorId from "../hooks/useProdutoPorId";
import useRemoverProduto from "../hooks/useRemoverProduto";
import { useState } from "react";
import useProdutoStore from "../store/produtoStore";
import Produto from "../interfaces/produto";
import dayjs from "dayjs";

const CardDeProdutoPage = () => {
  const { id } = useParams();
  const { data: produto, isLoading, error } = useProdutoPorId(id);

  const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);
  const tratarProdutoSelecionado = (produto: Produto) => setProdutoSelecionado(produto);

  const {
    mutate: removerProduto,
    isLoading: removendo,
  } = useRemoverProduto();

  const [removido, setRemovido] = useState(false);

  const handleRemoverProduto = () => {
    tratarRemocaoDeProduto(produto.id);
    setRemovido(true);
  };

  const tratarRemocaoDeProduto = (id) => {
    removerProduto(id);
  };

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;

  return (
    <div>
      {removido && (
        <div className="alert alert-success" role="alert">
          Produto removido com sucesso!
        </div>
      )}
      <h1 id="cardtitle" style={{ fontSize: "24px", marginBottom: "20px", color: "#ffffff" }}>
        {produto.nome}
      </h1>
      <div
        id="cardproduto"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
      >
        <img
          src={produto.imagem}
          alt="Imagem"
          style={{
            maxWidth: "300px", 
            height: "auto", 
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
          }}
        />
        <div id="cardinfoproduto" style={{ width: "100%", maxWidth: "800px" }}>
          <table id="tabela2" className="table table-responsive table-bordered table-sm">
            <tbody>
              {/* Categoria */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Categoria
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {produto.categoria.nome}
                </td>
              </tr>
              {/* Nome */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Nome
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {produto.nome}
                </td>
              </tr>
              {/* Preço */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Preço
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  R${" "}
                  {produto.preco.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </td>
              </tr>
              {/* Estoque */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Estoque
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {produto.qtdEstoque.toLocaleString("pt-BR", {
                    useGrouping: true,
                  })}
                </td>
              </tr>
              {/* Data Cadastro */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Data Cadastro
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
                </td>
              </tr>
              {/* Disponível */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Disponível
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {produto.disponivel ? "Sim" : "Não"}
                </td>
              </tr>
              {/* Descrição */}
              <tr>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Descrição
                </td>
                <td className="align-middle text-left texto-branco" style={{ fontSize: "16px" }}>
                  {produto.descricao}
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <NavLink to={`/cadastrar-produto`}>
              <button
                onClick={() => tratarProdutoSelecionado(produto)}
                className={`btn btn-primary btn-sm ${removido ? "disabled" : ""}`}
                disabled={removido}
              >
                Editar
              </button>
            </NavLink>
            <button
              onClick={handleRemoverProduto}
              className={`btn btn-danger btn-sm ${removido ? "disabled" : ""}`}
              disabled={removido}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeProdutoPage;
