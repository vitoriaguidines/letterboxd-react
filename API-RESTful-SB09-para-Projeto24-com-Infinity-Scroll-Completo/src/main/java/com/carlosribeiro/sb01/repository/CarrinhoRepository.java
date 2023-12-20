package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Carrinho;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    @Query("select c from Carrinho c left outer join fetch c.itens order by c.id")
    List<Carrinho> recuperarCarrinhosComItens();

}
