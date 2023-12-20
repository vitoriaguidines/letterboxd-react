import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemCarrinho from '../interfaces/itemCarrinho';
import { URL_CARRINHO } from "../util/constants";
import useApi from "./useApi";


const useApiItemCarrinho = () => {
  const [carrinhoItens, setCarrinhoItens] = useState<ItemCarrinho[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL_CARRINHO}/itens-de-carrinho`);
      const data = await response.json();
      setCarrinhoItens(data);
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho', error);
    }
  };

  const adicionarItemAoCarrinho = () => {
    const { cadastrar } = useApi<ItemCarrinho>(URL_CARRINHO);
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (itemCarrinho: ItemCarrinho) => cadastrar(itemCarrinho),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["itemCarrinho"],
        });
      },
    });
  };

  const removerItemDoCarrinho = () => {
    const { removerPorId } = useApi<ItemCarrinho>(URL_CARRINHO);
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (id: number) => removerPorId(id),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["itemCarrinho"],
        });
      },
    });
  };

  const alterarItemDoCarrinho = () => {
    const { alterar } = useApi<ItemCarrinho>(URL_CARRINHO);
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (itemCarrinho: ItemCarrinho) => alterar(itemCarrinho),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["itemCarrinho"],
        });
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    carrinhoItens,
    adicionarItemAoCarrinho,
    removerItemDoCarrinho,
    alterarItemDoCarrinho,
  };
};

export default useApiItemCarrinho;
