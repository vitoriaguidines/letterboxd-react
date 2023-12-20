package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.service.ItemDeCarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("itens-de-carrinho")
public class ItemDeCarrinhoController {

    @Autowired
    private ItemDeCarrinhoService itemDeCarrinhoService;

    @GetMapping
    public List<ItemDeCarrinho> recuperarItensPorCarrinho() {
        return itemDeCarrinhoService.recuperarItensPorCarrinho();
    }

    @PostMapping("/adicionar")
    public void adicionarItemAoCarrinho(@RequestBody ItemDeCarrinho itemDeCarrinho) {
        itemDeCarrinhoService.adicionarItemAoCarrinho(itemDeCarrinho);
    }

    @PutMapping("/atualizar/{itemId}")
    public void atualizarItemDeCarrinho(@PathVariable Long itemId, @RequestBody ItemDeCarrinho itemDeCarrinho) {
        // Aqui, estamos usando o mesmo método adicionarItemAoCarrinho para atualizar o item
        itemDeCarrinho.setId(itemId);  // Certifique-se de definir o ID do item a ser atualizado
        itemDeCarrinhoService.adicionarItemAoCarrinho(itemDeCarrinho);
    }

    @DeleteMapping("/remover/{itemId}")
    public void removerItemDeCarrinho(@PathVariable Long itemId) {
        itemDeCarrinhoService.removerItemDeCarrinho(itemId);
    }

}
