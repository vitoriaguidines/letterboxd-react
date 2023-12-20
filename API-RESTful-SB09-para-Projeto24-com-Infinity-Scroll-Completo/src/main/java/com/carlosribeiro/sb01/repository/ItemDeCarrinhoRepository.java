package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemDeCarrinhoRepository extends JpaRepository<ItemDeCarrinho, Long> {
    @Query("select i from ItemDeCarrinho i left outer join fetch i.carrinho order by i.id")
    List<ItemDeCarrinho> recuperarItensPorCarrinho();

}
