import { useState } from "react";
import dayjs from "dayjs";
import useProdutosPaginados from "../hooks/useProdutosPaginados";
import useProdutoStore from "../store/produtoStore";
import useRemoverProduto from "../hooks/useRemoverProduto";

const TabelasDeProdutos = () => {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);

  const setPagina = useProdutoStore((s) => s.setPagina);

  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setPagina(0); // Resetar para a primeira página ao mudar a ordenação
  };

  const { data: produtosPaginados, isLoading } = useProdutosPaginados({
    pagina,
    tamanho,
    nome,
    sort: sortConfig.key,
    direction: sortConfig.direction,
  });

  const { mutate: removerProduto } = useRemoverProduto();

  const tratarRemocaoDeProduto = async (id: number) => {
    setLoadingId(id);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await removerProduto(id);
    setLoadingId(null);
    setPagina(0);
  };

  if (isLoading) return <h6>Carregando...</h6>;

  return (
    <table className="table table-responsive table-bordered table-sm">
      <thead>
        <tr>
          <th
            className="align-middle text-center texto-branco"
            onClick={() => handleSort("id")}
            style={{ cursor: "pointer" }}
          >
            Id {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th className="align-middle text-center texto-branco">Imagem</th>
          <th className="align-middle text-center texto-branco">Categoria</th>
          <th
            className="align-middle text-center texto-branco"
            onClick={() => handleSort("nome")}
            style={{ cursor: "pointer" }}
          >
            Nome (descrição){" "}
            {sortConfig.key === "nome" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th className="align-middle text-center texto-branco">Data de Cadastro</th>
          <th className="align-middle text-center texto-branco">Quantidade</th>
          <th className="align-middle text-center texto-branco">Preço</th>
          <th className="align-middle text-center texto-branco">Ação</th>
        </tr>
      </thead>
      <tbody>
        {produtosPaginados?.itens.map((produto) => (
          <tr key={produto.id}>
            <td className="align-middle text-center texto-branco">{produto.id}</td>
            <td className="align-middle text-center texto-branco">
              <img src={produto.imagem} alt={produto.nome} style={{ width: "40px" }} />
            </td>
            <td className="align-middle text-center texto-branco">{produto.categoria.nome} </td>
            <td className="align-middle texto-branco">{produto.nome} {produto.descricao ? `(${produto.descricao})` : ""}</td>
            <td className="align-middle text-center texto-branco">
              {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
            </td>
            <td className="align-middle text-center texto-branco">{produto.qtdEstoque}</td>
            <td className="align-middle text-end pe-3 texto-branco">{produto.preco}</td>
            <td className="align-middle text-center">
              <button
                onClick={() => tratarRemocaoDeProduto(produto.id!)}
                className="btn btn-danger btn-sm"
                disabled={loadingId === produto.id}
              >
                {loadingId === produto.id ? (
                  <>
                    <span className="spinner-border spinner-border-sm"></span> Carregando...
                  </>
                ) : (
                  "Remover"
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
  <tr>
    <td colSpan={4}></td>
    <td className="align-middle text-center fw-bold texto-branco">Total...</td>
    <td colSpan={2} className="align-middle text-center fw-bold texto-branco">
      R${" "}
      {produtosPaginados?.itens
        .reduce((total, produto) => produto.qtdEstoque * produto.preco + total, 0)
        .toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        })}
    </td>
    <td></td>
  </tr>
</tfoot>

    </table>
  );
};

export default TabelasDeProdutos;
