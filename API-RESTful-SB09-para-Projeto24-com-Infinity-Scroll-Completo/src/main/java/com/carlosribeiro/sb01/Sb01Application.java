package com.carlosribeiro.sb01;


import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.CategoriaRepository;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import com.carlosribeiro.sb01.repository.ItemDeCarrinhoRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import com.carlosribeiro.sb01.service.CarrinhoService;
import com.carlosribeiro.sb01.service.ItemDeCarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;


@SpringBootApplication
public class Sb01Application implements CommandLineRunner {


	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private CarrinhoRepository carrinhoRepository;

	@Autowired
	private ItemDeCarrinhoRepository itemDeCarrinhoRepository;

	@Autowired
	private CarrinhoService carrinhoService;

	@Autowired
	private ItemDeCarrinhoService itemDeCarrinhoService;


	public static void main(String[] args) {
		SpringApplication.run(Sb01Application.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		Categoria terror = new Categoria("Terror", "terror");
		categoriaRepository.save(terror);
		Categoria drama = new Categoria("Drama", "drama");
		categoriaRepository.save(drama);
		Categoria suspense = new Categoria("Suspense", "suspense");
		categoriaRepository.save(suspense);

		Produto produto = new Produto(
				"evangelion.png",
				drama,
				"The End of Evangelion",
				"a movie about the anime evangelion",
				true,
				LocalDate.of(1997, 7, 19),
				100,
				BigDecimal.valueOf(5.0));
		produtoRepository.save(produto);

		produto = new Produto(
				"solanin.png",
				drama,
				"Solanin",
				"friends and music against the world",
				true,
				LocalDate.of(2010, 4, 3),
				400,
				BigDecimal.valueOf(8.75));
		produtoRepository.save(produto);

		produto = new Produto(
				"akira.png",
				suspense,
				"Akira",
				"a cyberpunk movie in tokyo",
				true,
				LocalDate.of(1991, 8, 9),
				120,
				BigDecimal.valueOf(10.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"scream.png",
				terror,
				"Scream",
				"what's your favorite scary movie?",
				true,
				LocalDate.of(1997, 1, 31),
				340,
				BigDecimal.valueOf(3.95));
		produtoRepository.save(produto);

		produto = new Produto(
				"friday.png",
				terror,
				"Friday the 13th",
				"jason is coming for you",
				true,
				LocalDate.of(1980, 12, 1),
				220,
				BigDecimal.valueOf(3.5));
		produtoRepository.save(produto);

		produto = new Produto(
				"shining.png",
				terror,
				"The Shining",
				"here's jhonny!",
				true,
				LocalDate.of(1980, 12, 25),
				350,
				BigDecimal.valueOf(14.5));
		produtoRepository.save(produto);

		produto = new Produto(
				"perfectblue.png",
				terror,
				"Perfect Blue",
				"when you don't seem like yourself",
				true,
				LocalDate.of(1998, 2, 28),
				720,
				BigDecimal.valueOf(6.82));
		produtoRepository.save(produto);

		produto = new Produto(
				"beachalone.png",
				drama,
				"On the Beach at Night Alone",
				"kim min-hee explains itself",
				true,
				LocalDate.of(2017, 3, 23),
				600,
				BigDecimal.valueOf(5.39));
		produtoRepository.save(produto);

		produto = new Produto(
				"handmaiden.png",
				drama,
				"The Handmaiden",
				"changed my life",
				true,
				LocalDate.of(2017, 1, 12),
				95,
				BigDecimal.valueOf(11.30));
		produtoRepository.save(produto);

		produto = new Produto(
				"chungkingexpress.png",
				drama,
				"Chungking Express",
				"does love even exist?",
				true,
				LocalDate.of(1996, 1, 19),
				350,
				BigDecimal.valueOf(9.40));
		produtoRepository.save(produto);

		produto = new Produto(
				"bottoms.png",
				suspense,
				"Bottoms",
				"slay loser queens",
				true,
				LocalDate.of(2023, 8, 25),
				240,
				BigDecimal.valueOf(11.23));
		produtoRepository.save(produto);

		produto = new Produto(
				"fallenangels.png",
				suspense,
				"Fallen Angels",
				"I miss the old hong kong",
				true,
				LocalDate.of(1995, 9, 6),
				120,
				BigDecimal.valueOf(12.95));
		produtoRepository.save(produto);

		produto = new Produto(
				"parasite.png",
				suspense,
				"Parasite",
				"can we trust us?",
				true,
				LocalDate.of(2019, 5, 30),
				380,
				BigDecimal.valueOf(7.45));
		produtoRepository.save(produto);

		produto = new Produto(
				"moodforlove.png",
				drama,
				"In the Mood for Love",
				"wong kar wai masterpiece",
				true,
				LocalDate.of(2001, 2, 23),
				76,
				BigDecimal.valueOf(4.75));
		produtoRepository.save(produto);

		produto = new Produto(
				"psycho.png",
				terror,
				"Psycho",
				"it' a mistery soundtrack",
				true,
				LocalDate.of(1961, 11, 1),
				380,
				BigDecimal.valueOf(8.45));
		produtoRepository.save(produto);

		produto = new Produto(
				"nosferatu.png",
				terror,
				"Nosferatu",
				"the oldest ones are the best",
				true,
				LocalDate.of(1922, 3, 15),
				280,
				BigDecimal.valueOf(13.4));
		produtoRepository.save(produto);

		produto = new Produto(
				"silenceoflambs.png",
				terror,
				"The Silence of the Lambs",
				"hannibal masterpiece",
				true,
				LocalDate.of(1991, 5, 17),
				300,
				BigDecimal.valueOf(9.86));
		produtoRepository.save(produto);

		produto = new Produto(
				"thewitch.png",
				suspense,
				"The Witch",
				"it's just a goat right?",
				true,
				LocalDate.of(2016, 3, 3),
				320,
				BigDecimal.valueOf(16.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"sixthsense.png",
				suspense,
				"The Sixth Sense",
				"I see dead people",
				true,
				LocalDate.of(1999, 10, 22),
				80,
				BigDecimal.valueOf(4.35));
		produtoRepository.save(produto);

		produto = new Produto(
				"ladybird.png",
				drama,
				"Lady Bird",
				"it's me for real",
				true,
				LocalDate.of(2018, 2, 15),
				70,
				BigDecimal.valueOf(4.77));
		produtoRepository.save(produto);

		produto = new Produto(
				"close.png",
				drama,
				"Close",
				"we'll be together forever",
				true,
				LocalDate.of(2023, 3, 2),
				60,
				BigDecimal.valueOf(2.48));
		produtoRepository.save(produto);

		produto = new Produto(
				"blackswan.png",
				drama,
				"Black Swan",
				"me and my toughts",
				true,
				LocalDate.of(2011, 4, 4),
				12,
				BigDecimal.valueOf(8.09));
		produtoRepository.save(produto);

		produto = new Produto(
				"chainsaw.png",
				terror,
				"The Texas Chainsaw Massacre",
				"you're so dumb",
				true,
				LocalDate.of(1974, 10, 28),
				35,
				BigDecimal.valueOf(3.59));
		produtoRepository.save(produto);

		produto = new Produto(
				"halloween.png",
				terror,
				"Halloween",
				"michael myers is after you",
				true,
				LocalDate.of(1978, 10, 25),
				89,
				BigDecimal.valueOf(2.40));
		produtoRepository.save(produto);

		produto = new Produto(
				"elmstreet.png",
				terror,
				"A Nightmare on Elm Street",
				"one two freddy's coming for you",
				true,
				LocalDate.of(1986, 11, 27),
				59,
				BigDecimal.valueOf(3.25));
		produtoRepository.save(produto);

		produto = new Produto(
				"gonegirl.png",
				suspense,
				"Gone Girl",
				"where's amy dunne?",
				true,
				LocalDate.of(2014, 10, 2),
				80,
				BigDecimal.valueOf(9.75));
		produtoRepository.save(produto);

		produto = new Produto(
				"fightclub.png",
				suspense,
				"Fight Club",
				"we don't talk about it",
				true,
				LocalDate.of(1999, 10, 29),
				80,
				BigDecimal.valueOf(10.1));
		produtoRepository.save(produto);


		Produto produto1 = produtoRepository.findById(1L).orElseThrow();
		Produto produto2 = produtoRepository.findById(2L).orElseThrow();
		Produto produto3 = produtoRepository.findById(3L).orElseThrow();

		Carrinho carrinho = carrinhoService.criarCarrinho();

		ItemDeCarrinho item1 = new ItemDeCarrinho(2, produto1, carrinho);
		ItemDeCarrinho item2 = new ItemDeCarrinho(1, produto2, carrinho);
		ItemDeCarrinho item3 = new ItemDeCarrinho(3, produto3, carrinho);

		itemDeCarrinhoService.adicionarItemAoCarrinho(item1);
		itemDeCarrinhoService.adicionarItemAoCarrinho(item2);
		itemDeCarrinhoService.adicionarItemAoCarrinho(item3);

	}
}
