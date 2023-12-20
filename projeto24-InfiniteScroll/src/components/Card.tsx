import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useApiCarrinho from '../hooks/useApiItemCarrinho';
import ItemCarrinho from '../interfaces/itemCarrinho';
import Produto from '../interfaces/produto';

interface Props {
  id: number;
  imagem: string;
  titulo: string;
  texto1: string;
  texto2: string;
  footer: React.ReactNode;
  cardBackgroundColor?: string;
  priceColor?: string;
}

const Card = ({ id, imagem, titulo, texto1, texto2, footer, cardBackgroundColor, priceColor }: Props) => {
  const { adicionarItemAoCarrinho, carrinhoItens } = useApiCarrinho();
  const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);

  const itemNoCarrinho = carrinhoItens.find(item => item.produto.id === id);



  const removerDoCarrinho = () => {
    setQuantidadeNoCarrinho(prevQuantidade => Math.max(0, prevQuantidade - 1));
  };

  return (
    <div className={`card border-0 mb-5`} style={{ backgroundColor: cardBackgroundColor }}>
      <Link to={`/produto/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={imagem} className="card-img-top" alt={titulo} />
      </Link>
      <div className="card-body">
        <Link to={`/produto/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h5 className="card-title fs-6 text-white font-times-new-roman font-weight-semi-bold">{titulo}</h5>
        </Link>
        <p className="card-text text-muted font-times-new-roman" style={{ color: priceColor }}>{texto1}</p>
        <p className="card-text fw-bold" style={{ color: priceColor }}>R$ {texto2}</p>
      </div>
      <div className="card-footer border-0 p-0">
        <button
          type="button"
          className="btn btn-primary w-100"
          style={{ backgroundColor: '#99aabb', borderColor: '#99aabb', color: '#efefef', fontFamily: 'hbs graphik medium' }}
        >
          {quantidadeNoCarrinho > 0 ? (
            <>
              <span
                role="img"
                aria-label="Remover"
                onClick={(e) => {
                  e.stopPropagation();
                  removerDoCarrinho();
                }}
              >
                ➖
              </span>
              {quantidadeNoCarrinho}
              <span
                role="img"
                aria-label="Adicionar"
                onClick={(e) => {
                  e.stopPropagation();
                  //adicionarAoCarrinho();
                }}
              >
                ➕
              </span>
            </>
          ) : (
            'Comprar'
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;