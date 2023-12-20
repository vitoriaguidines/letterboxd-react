import Carrinho from '../interfaces/carrinho';
import Produto from '../interfaces/produto';
import produto from '../interfaces/produto';

interface ItemCarrinho {
  id: number;
  quantidade: number;
  carrinho: Carrinho;
  produto: Produto; 
}

export default ItemCarrinho;