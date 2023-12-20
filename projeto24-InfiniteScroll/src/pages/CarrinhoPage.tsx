import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApiItemCarrinho from '../hooks/useApiItemCarrinho';

const CarrinhoPage = () => {
  const navigate = useNavigate();
  const { carrinhoItens, removerItemDoCarrinho } = useApiItemCarrinho();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho', error);
    } finally {
      setLoading(false);
    }
  };

  const removerItem = async (itemId: number) => {
    const item = carrinhoItens.find((item) => item.id === itemId);

    if (item) {
      if (item.quantidade > 1) {
        await removerItemDoCarrinho(item.id, 1); 
      } else {
        await removerItemDoCarrinho(item.id); 
      }
    }
  };

  const calcularSubtotal = (item) => {
    return (item.produto.preco * item.quantidade).toFixed(2);
  };

  const calcularTotal = () => {
    return carrinhoItens.reduce((total, item) => total + parseFloat(calcularSubtotal(item)), 0).toFixed(2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando itens do carrinho...</p>;
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ color: '#99aabb', padding: '20px', maxWidth: '800px', width: '100%' }}>
        <h2>Carrinho de Compras</h2>
        <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Imagem</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Nome</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Descrição</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Preço</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Quantidade</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Preço Total</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Remover</th>
            </tr>
          </thead>
          <tbody>
            {carrinhoItens.map((item) => (
              <tr key={item.id} style={{ border: '1px solid #ddd', textAlign: 'center' }}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <img src={item.produto.imagem} alt={item.produto.nome} style={{ width: '50px', height: '50px' }} />
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.produto.nome}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.produto.descricao}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>R$ {item.produto.preco.toFixed(2)}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.quantidade}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>R$ {calcularSubtotal(item)}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <button onClick={() => removerItem(item.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: '10px' }}>
          <strong>Total:</strong> R$ {calcularTotal()}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            style={{
              backgroundColor: '#99aabb',
              color: '#efefef',
              padding: '10px',
              marginTop: '10px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Voltar às Compras
          </button>
          <button
            type="button"
            style={{
              backgroundColor: '#99aabb',
              color: '#efefef',
              padding: '10px',
              marginTop: '10px',
              cursor: 'pointer',
            }}
            onClick={() => alert('Compra finalizada!')}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoPage;
