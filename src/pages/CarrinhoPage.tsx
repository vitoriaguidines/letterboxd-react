import React, { useEffect, useState } from 'react';
import useItemCarrinho from '../hooks/useItemCarrinho';
import useRemoverItemCarrinho from '../hooks/useRemoverItemCarrinho';
import useAlterarItemCarrinho from '../hooks/useAlterarItemCarrinho';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CarrinhoPage = () => {
  const { data: itens, isLoading, error } = useItemCarrinho();

  const { mutate: alterarItem } = useAlterarItemCarrinho();
  const { mutate: removerItemCarrinho } = useRemoverItemCarrinho();

  const [precoTotalCarrinho, setPrecoTotalCarrinho] = useState(0);

  useEffect(() => {
    // Calcula o preço total do carrinho
    const calcularPrecoTotal = () => {
      if (itens) {
        const total = itens.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0);
        setPrecoTotalCarrinho(total);
      }
    };

    calcularPrecoTotal();
  }, [itens]);

  const handleQuantidadeChange = (item, novaQuantidade) => {
    if (novaQuantidade < 1) return; 
    alterarItem({
      id: item.id,
      quantidade: novaQuantidade,
      produto: item.produto,
      carrinho: item.carrinho,
    });
  };

  const tratarRemocaoDeItem = (id) => {
    removerItemCarrinho(id);
    window.location.reload();
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '20px' }}>Itens do Carrinho</h1>
      <table id="tabela" className="table table-responsive table-bordered table-sm">
      <thead>
  <tr>
    <th className="align-middle text-center texto-branco">Produto</th>
    <th className="align-middle text-center texto-branco">Preço Unitário</th>
    <th className="align-middle text-center texto-branco">Quantidade</th>
    <th className="align-middle text-center texto-branco">Preço Total</th>
    <th className="align-middle text-center texto-branco">Remover</th>
  </tr>
</thead>

        <tbody>
  {itens.map((item) => (
    <tr key={item.id}>
      <td width="30%" className="align-middle text-center texto-branco">
        <div
          id="produto-carrinho-info"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <img
            className="img-fluid"
            src={item.produto.imagem}
            alt="Imagem"
            style={{ width: "60px", height: "60px", borderRadius: "8px" }}
          />
          <div>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="texto-branco"
            >
              {item.produto.nome}
            </h2>
            <p style={{ fontSize: "12px" }} className="texto-branco">
              {item.produto.descricao}
            </p>
          </div>
        </div>
      </td>
      <td width="10%" className="align-middle text-center texto-branco">
        R${" "}
        {item.produto.preco.toLocaleString("pt-BR", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          useGrouping: true,
        })}
      </td>
      <td width="10%" className="align-middle text-center texto-branco">
        <div id="botao-maismenos">
          <div
            id="menosmais"
            onClick={() => handleQuantidadeChange(item, item.quantidade - 1)}
          >
            <FaMinus />
          </div>
          <div id="quantidade">{item.quantidade}</div>
          <div
            id="menosmais"
            onClick={() => handleQuantidadeChange(item, item.quantidade + 1)}
          >
            <FaPlus />
          </div>
        </div>
      </td>
      <td width="10%" className="align-middle text-center texto-branco">
        R${" "}
        {`${(item.quantidade * item.produto.preco).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        })}`}
      </td>
      <td width="10%" className="align-middle text-center">
        <button
          className="btn btn-danger"
          onClick={() => tratarRemocaoDeItem(item.id)}
          style={{
            borderRadius: "8px",
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            color: "#ffffff",
            border: "none",
            fontSize: "12px",
            padding: "5px 10px",
          }}
        >
          REMOVER
        </button>
      </td>
    </tr>
  ))}
</tbody>
<tfoot>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td width="10%" className="align-middle text-center texto-branco">
      <strong>Total do Carrinho</strong>
    </td>
    <td width="10%" className="align-middle text-center texto-branco">
      <strong>
        R${" "}
        {precoTotalCarrinho.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        })}
      </strong>
    </td>
  </tr>
</tfoot>

      </table>
    </div>
  );
};

export default CarrinhoPage;
