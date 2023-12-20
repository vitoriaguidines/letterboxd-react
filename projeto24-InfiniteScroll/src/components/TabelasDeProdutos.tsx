import dayjs from "dayjs";
import Produto from "../interfaces/produto";
import useProdutosPaginados from "../hooks/useProdutosPaginados";
import useProdutoStore from "../store/produtoStore";
import useRemoverProduto from "../hooks/useRemoverProduto";

const TabelasDeProdutos = () => {
  const pagina = useProdutoStore((s) => s.pagina);
  const tamanho = useProdutoStore((s) => s.tamanho);
  const nome = useProdutoStore((s) => s.nome);

  const setPagina = useProdutoStore((s) => s.setPagina);
  const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);

  const tratarRemocaoDeProduto = (id: number) => {
    removerProduto(id);
    setPagina(0);
  };
  const tratarProdutoSelecionado = (produto: Produto) =>
    setProdutoSelecionado(produto);

  const {
    data: produtoRemovido,
    mutate: removerProduto,
    isLoading: removendo,
    error: erroRemocao,
  } = useRemoverProduto();

  const {
    data: produtosPaginados,
    isLoading,
    error,
  } = useProdutosPaginados({ pagina, tamanho, nome });

  // if (removendo) return null;
  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;
  if (erroRemocao) throw erroRemocao;

  const produtos = produtosPaginados!.itens;

  return (
    <table className="table table-responsive table-bordered table-sm">
      <thead>
        <tr>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Id
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Imagem
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Categoria
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Nome (descrição)
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Data de Cadastro
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Quantidade
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Preço
          </th>
          <th className="align-middle text-center" style={{ color: "#aabbcc" }}>
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td
              width="5%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              {produto.id}
            </td>
            <td
              width="10%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{ width: "40px" }}
              />{" "}
            </td>
            <td
              width="10%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              {produto.categoria.nome}
            </td>
            <td width="30%" className="align-middle" style={{ color: "#aabbcc" }}>
              <a
                className="link-underline"
                onClick={() => tratarProdutoSelecionado(produto)}
              >
                {produto.nome}
              </a>{" "}
              ({produto.descricao})
            </td>
            <td
              width="15%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
            </td>
            <td
              width="10%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              {produto.qtdEstoque.toLocaleString("pt-BR", {
                useGrouping: true,
              })}
            </td>
            <td
              width="10%"
              className="align-middle text-end pe-3"
              style={{ color: "#aabbcc" }}
            >
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
            <td
              width="10%"
              className="align-middle text-center"
              style={{ color: "#aabbcc" }}
            >
              <button
                onClick={() => tratarRemocaoDeProduto(produto.id!)}
                className="btn btn-danger btn-sm"
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}></td>
          <td
            className="align-middle text-center fw-bold"
            style={{ color: "#aabbcc" }}
          >
            Total...
          </td>
          <td
            colSpan={2}
            className="align-middle text-center fw-bold"
            style={{ color: "#aabbcc" }}
          >
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
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TabelasDeProdutos;
