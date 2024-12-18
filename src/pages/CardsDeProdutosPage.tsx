import { useParams, NavLink } from "react-router-dom";
import useProdutosPaginadosPorSlugDaCategoria from "../hooks/useProdutosPaginadosPorSlugDaCategoria";
import InfiniteScroll from "react-infinite-scroll-component";
import useAdicionarItemCarrinho from "../hooks/useAdicionarItemCarrinho";
import useProdutosEmItensCarrinho from "../hooks/useProdutosEmItensCarrinho";
import useItemCarrinho from "../hooks/useItemCarrinho";
import useAlterarItemCarrinho from "../hooks/useAlterarItemCarrinho";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CardsDeProdutosPage = () => {
  const { slug } = useParams();
  const tamanho = 12;
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useProdutosPaginadosPorSlugDaCategoria({
    tamanho,
    slug,
  });

  const { mutate: adicionarItem } = useAdicionarItemCarrinho();
  const { mutate: alterarItem } = useAlterarItemCarrinho();
  const { data: itens } = useItemCarrinho();
  const { data: produtosEmItensCarrinho } = useProdutosEmItensCarrinho();

  const verificaProdutoNoCarrinho = (produto) => {
    return produtosEmItensCarrinho && produtosEmItensCarrinho.find((obj) => obj.id === produto.id);
  };

  const handleAdicionarItem = (produto) => {
    if (!verificaProdutoNoCarrinho(produto)) {
      adicionarItem({ quantidade: 1, produto });
    }
  };

  const handleQuantidadeChange = (item, novaQuantidade) => {
    alterarItem({ id: item.id, quantidade: novaQuantidade, produto: item.produto, carrinho: item.carrinho });
  };

  if (isLoading) return <h6 style={{ color: "#99aabb" }}>Carregando...</h6>;
  if (error) return <p style={{ color: "#bb2124" }}>Ocorreu um erro: {error.message}</p>;

  const getQtdProdutos = data?.pages.reduce((total, page) => total + page.itens.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={getQtdProdutos}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6 style={{ color: "#99aabb" }}>Carregando...</h6>}
      style={{ overflow: "visible" }}
    >
<div className="row align-items-stretch" style={{ margin: "20px 0" }}>
  {data?.pages.map((page) =>
    page.itens.map((produto) => (
      <div key={produto.id} className="col-md-3 col-sm-4 col-6 d-flex" style={{ marginBottom: "20px" }}>
        <div className="card-produto">
          <NavLink to={`/produto/${produto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3 className="card-title">{produto.nome}</h3>
          </NavLink>
          <p className="card-preco">
            R$ {produto.preco.toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </p>
          <button
            className="btn-comprar"
            onClick={(e) => {
              e.stopPropagation();
              handleAdicionarItem(produto);
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    ))
  )}
</div>


    </InfiniteScroll>
  );
};

export default CardsDeProdutosPage;
