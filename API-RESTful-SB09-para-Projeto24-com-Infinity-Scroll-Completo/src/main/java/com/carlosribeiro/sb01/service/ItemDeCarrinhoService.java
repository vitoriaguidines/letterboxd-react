package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.repository.ItemDeCarrinhoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemDeCarrinhoService {

    @Autowired
    private ItemDeCarrinhoRepository itemDeCarrinhoRepository;

    @Transactional
    public void adicionarItemAoCarrinho(ItemDeCarrinho itemDeCarrinho) {
        itemDeCarrinhoRepository.save(itemDeCarrinho);
    }

    @Transactional
    public void removerItemDeCarrinho(Long itemId) {
        itemDeCarrinhoRepository.deleteById(itemId);
    }

    @Transactional
    public List<ItemDeCarrinho> recuperarItensDeCarrinho() {
        return itemDeCarrinhoRepository.findAll();
    }

    public List<ItemDeCarrinho> recuperarItensPorCarrinho() {
        return itemDeCarrinhoRepository.recuperarItensPorCarrinho();
    }

}
