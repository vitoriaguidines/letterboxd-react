package com.carlosribeiro.sb01.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "data_criacao")
    private LocalDate dataCriacao;

    @OneToMany(mappedBy = "carrinho", cascade = CascadeType.ALL)
    private List<ItemDeCarrinho> itens;

    public Carrinho() {
    }

    public Long getId() {
        return id;
    }

    public List<ItemDeCarrinho> getItens() {
        return itens;
    }

    public Carrinho(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

}
