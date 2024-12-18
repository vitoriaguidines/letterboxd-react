package com.carlosribeiro.sb01;

import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.CategoriaRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class Sb01Application implements CommandLineRunner {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	public static void main(String[] args) {
		SpringApplication.run(Sb01Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		// Limpar dados existentes
		produtoRepository.deleteAll();
		categoriaRepository.deleteAll();

		// Categorias
		Categoria terror = new Categoria("Terror", "terror");
		categoriaRepository.save(terror);

		Categoria drama = new Categoria("Drama", "drama");
		categoriaRepository.save(drama);

		Categoria suspense = new Categoria("Suspense", "suspense");
		categoriaRepository.save(suspense);

		// Produtos
		Produto produto = new Produto("/movies/evangelion.png", drama, "The End of Evangelion", "A movie about the anime Evangelion", true, LocalDate.of(1997, 7, 19), 100, BigDecimal.valueOf(5.0));
		produtoRepository.save(produto);

		produto = new Produto("/movies/solanin.png", drama, "Solanin", "Friends and music against the world", true, LocalDate.of(2010, 4, 3), 400, BigDecimal.valueOf(8.75));
		produtoRepository.save(produto);

		produto = new Produto("/movies/akira.png", suspense, "Akira", "A cyberpunk movie in Tokyo", true, LocalDate.of(1991, 8, 9), 120, BigDecimal.valueOf(10.00));
		produtoRepository.save(produto);

		produto = new Produto("/movies/scream.png", terror, "Scream", "What's your favorite scary movie?", true, LocalDate.of(1997, 1, 31), 340, BigDecimal.valueOf(3.95));
		produtoRepository.save(produto);

		produto = new Produto("/movies/friday.png", terror, "Friday the 13th", "Jason is coming for you", true, LocalDate.of(1980, 12, 1), 220, BigDecimal.valueOf(3.5));
		produtoRepository.save(produto);

		produto = new Produto("/movies/shining.png", terror, "The Shining", "Here's Johnny!", true, LocalDate.of(1980, 12, 25), 350, BigDecimal.valueOf(14.5));
		produtoRepository.save(produto);

		produto = new Produto("/movies/perfectblue.png", terror, "Perfect Blue", "When you don't seem like yourself", true, LocalDate.of(1998, 2, 28), 720, BigDecimal.valueOf(6.82));
		produtoRepository.save(produto);

		produto = new Produto("/movies/beachalone.png", drama, "On the Beach at Night Alone", "Kim Min-hee explains itself", true, LocalDate.of(2017, 3, 23), 600, BigDecimal.valueOf(5.39));
		produtoRepository.save(produto);

		produto = new Produto("/movies/handmaiden.png", drama, "The Handmaiden", "Changed my life", true, LocalDate.of(2017, 1, 12), 95, BigDecimal.valueOf(11.30));
		produtoRepository.save(produto);

		produto = new Produto("/movies/chungkingexpress.png", drama, "Chungking Express", "Does love even exist?", true, LocalDate.of(1996, 1, 19), 350, BigDecimal.valueOf(9.40));
		produtoRepository.save(produto);

		produto = new Produto("/movies/bottoms.png", suspense, "Bottoms", "Slay loser queens", true, LocalDate.of(2023, 8, 25), 240, BigDecimal.valueOf(11.23));
		produtoRepository.save(produto);

		produto = new Produto("/movies/fallenangels.png", suspense, "Fallen Angels", "I miss the old Hong Kong", true, LocalDate.of(1995, 9, 6), 120, BigDecimal.valueOf(12.95));
		produtoRepository.save(produto);

		produto = new Produto("/movies/parasite.png", suspense, "Parasite", "Can we trust us?", true, LocalDate.of(2019, 5, 30), 380, BigDecimal.valueOf(7.45));
		produtoRepository.save(produto);

		produto = new Produto("/movies/moodforlove.png", drama, "In the Mood for Love", "Wong Kar Wai masterpiece", true, LocalDate.of(2001, 2, 23), 76, BigDecimal.valueOf(4.75));
		produtoRepository.save(produto);

		produto = new Produto("/movies/psycho.png", terror, "Psycho", "It's a mystery soundtrack", true, LocalDate.of(1961, 11, 1), 380, BigDecimal.valueOf(8.45));
		produtoRepository.save(produto);

		produto = new Produto("/movies/nosferatu.png", terror, "Nosferatu", "The oldest ones are the best", true, LocalDate.of(1922, 3, 15), 280, BigDecimal.valueOf(13.4));
		produtoRepository.save(produto);

		produto = new Produto("/movies/sixthsense.png", suspense, "The Sixth Sense", "I see dead people", true, LocalDate.of(1999, 10, 22), 80, BigDecimal.valueOf(4.35));
		produtoRepository.save(produto);

		produto = new Produto("/movies/fightclub.png", suspense, "Fight Club", "We don't talk about it", true, LocalDate.of(1999, 10, 29), 80, BigDecimal.valueOf(10.1));
		produtoRepository.save(produto);

		produto = new Produto("/movies/elmstreet.png", terror, "A Nightmare on Elm Street", "One two Freddy's coming for you", true, LocalDate.of(1986, 11, 27), 59, BigDecimal.valueOf(3.25));
		produtoRepository.save(produto);

		produto = new Produto("/movies/halloween.png", terror, "Halloween", "Michael Myers is after you", true, LocalDate.of(1978, 10, 25), 89, BigDecimal.valueOf(2.40));
		produtoRepository.save(produto);

		produto = new Produto("/movies/chainsaw.png", terror, "The Texas Chainsaw Massacre", "You're so dumb", true, LocalDate.of(1974, 10, 28), 35, BigDecimal.valueOf(3.59));
		produtoRepository.save(produto);
		
	}
}
