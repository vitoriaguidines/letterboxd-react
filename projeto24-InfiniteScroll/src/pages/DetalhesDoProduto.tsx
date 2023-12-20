import React, { useEffect, useState } from "react";
import { useParams, NavLink , useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useApiProduto from "../hooks/useApiProduto";
import Produto from "../interfaces/produto";
import useProdutoStore from "../store/produtoStore";

const DetalhesDoProduto = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { recuperarProdutosPorId, removerProduto } = useApiProduto();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [produtoRemovido, setProdutoRemovido] = useState(false);

  const { data: produtoQuery, isLoading, isError } = useQuery(
    ["produto", id],
    () => recuperarProdutosPorId(Number(id)),
    {
      enabled: !produtoRemovido,
    }
  );

  const setProdutoSelecionado = useProdutoStore((state) => state.setProdutoSelecionado);

  useEffect(() => {
    setProduto(produtoQuery || null);
  }, [produtoQuery]);

  const handleRemoverProduto = async () => {
    try {
      await removerProduto(Number(id));
      setProdutoRemovido(true);
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  const handleEditarProduto = () => {
    if (produto) {
      setProdutoSelecionado(produto);
      navigate("/listar-produtos");
    }
  };

  useEffect(() => {
    if (produtoQuery) {
      setProdutoSelecionado(produtoQuery);
    }
  }, [produtoQuery]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !produto) {
    return <p>Erro ao carregar os detalhes do produto.</p>;
  }

  return (
    <div style={{ color: "#99aabb" }}>
      {produtoRemovido && (
        <div className="alert alert-success" role="alert">
          Produto removido com sucesso!
        </div>
      )}

      <h2 style={{ color: "#99aabb" }}>Detalhes do Produto</h2>
      <img
            src={`/${produto.imagem}`}
            alt={produto.nome}
            className="img-fluid rounded"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
      <p style={{ color: "#99aabb" }}>ID do Produto: {produto.id}</p>
      <p style={{ color: "#99aabb" }}>Nome: {produto.nome}</p>
      <p style={{ color: "#99aabb" }}>Descrição: {produto.descricao}</p>
      {produto.categoria && (
        <p style={{ color: "#99aabb" }}>Categoria: {produto.categoria.nome}</p>
      )}
      <p style={{ color: "#99aabb" }}>Disponível: {produto.disponivel ? 'Sim' : 'Não'}</p>
      <p style={{ color: "#99aabb" }}>Data de Lançamento: {new Date(produto.dataCadastro).toLocaleDateString()}</p>
      
      <button
        className="btn btn-danger"
        onClick={handleRemoverProduto}
        disabled={produtoRemovido}
      >
        Remover
      </button>
      <NavLink
        to="/listar-produtos"
        className={`btn btn-success ${produtoRemovido ? "disabled" : ""}`}
        style={{ marginRight: '10px' }}
        onClick={(e) => produtoRemovido && e.preventDefault()}
      >
        Editar
      </NavLink>
    </div>
  );
};

export default DetalhesDoProduto;
