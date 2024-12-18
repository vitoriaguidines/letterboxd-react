import { useState } from "react";
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

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const tratarRemocaoDeProduto = async (id: number) => {
    setLoadingId(id); // Ativa o spinner no botão específico
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula o delay de 1 segundo
    await removerProduto(id); // Chama a função real de remoção
    setLoadingId(null); // Desativa o spinner após a remoção
    setPagina(0); // Atualiza a página
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

  if (isLoading) return <h6>Carregando...</h6>;
  if (error) throw error;
  if (erroRemocao) throw erroRemocao;

  const produtos = produtosPaginados!.itens;

  return (
    <table className="table table-responsive table-bordered table-sm">
      <thead>
        <tr>
          <th className="align-middle text-center texto-branco">Id</th>
          <th className="align-middle text-center texto-branco">Imagem</th>
          <th className="align-middle text-center texto-branco">Categoria</th>
          <th className="align-middle text-center texto-branco">Nome (descrição)</th>
          <th className="align-middle text-center texto-branco">Data de Cadastro</th>
          <th className="align-middle text-center texto-branco">Quantidade</th>
          <th className="align-middle text-center texto-branco">Preço</th>
          <th className="align-middle text-center texto-branco">Ação</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td className="align-middle text-center texto-branco">{produto.id}</td>
            <td className="align-middle text-center texto-branco">
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{ width: "40px" }}
              />
            </td>
            <td className="align-middle text-center texto-branco">
              {produto.categoria.nome}
            </td>
            <td className="align-middle texto-branco">
              <a
                className="link-underline texto-branco"
                onClick={() => tratarProdutoSelecionado(produto)}
                style={{ cursor: "pointer" }}
              >
                {produto.nome}
              </a>{" "}
              ({produto.descricao})
            </td>
            <td className="align-middle text-center texto-branco">
              {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
            </td>
            <td className="align-middle text-center texto-branco">
              {produto.qtdEstoque.toLocaleString("pt-BR", { useGrouping: true })}
            </td>
            <td className="align-middle text-end pe-3 texto-branco">
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
            <td className="align-middle text-center">
              <button
                onClick={() => tratarRemocaoDeProduto(produto.id!)}
                className="btn btn-danger btn-sm"
                disabled={loadingId === produto.id} // Desativa o botão durante o carregamento
              >
                {loadingId === produto.id ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    Carregando...
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
            {produtos
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
