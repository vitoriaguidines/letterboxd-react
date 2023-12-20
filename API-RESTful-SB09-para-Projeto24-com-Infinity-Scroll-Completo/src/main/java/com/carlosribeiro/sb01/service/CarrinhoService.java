package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Transactional
    public Carrinho criarCarrinho() {
        Carrinho carrinho = new Carrinho(LocalDate.now());
        return carrinhoRepository.save(carrinho);
    }

    public List<Carrinho> getCarrinhosComItens() {
        return carrinhoRepository.recuperarCarrinhosComItens();
    }

}
