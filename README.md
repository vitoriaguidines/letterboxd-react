# Letterboxd React - Loja com Carrinho de Compras

![License](https://img.shields.io/github/license/vitoriaguidines/letterboxd-react)
![Issues](https://img.shields.io/github/issues/vitoriaguidines/letterboxd-react)

Este projeto é uma aplicação web inspirada no Letterboxd, com a funcionalidade adicional de um carrinho de compras. Desenvolvido com **React** no front-end e uma **API RESTful em Spring Boot** no back-end, ele também utiliza um banco de dados MySQL para gerenciamento de dados.

## 📂 Estrutura do Projeto

### **Back-End**
- **Framework:** Spring Boot
- **Banco de Dados:** MySQL
- **Principais Funcionalidades:**
  - CRUD de produtos, categorias e carrinhos.
  - Carrinho de compras com manipulação de itens.
  - Suporte a paginação e consultas customizadas.

### **Front-End**
- **Framework:** React com Vite
- **Principais Funcionalidades:**
  - Exibição de produtos e categorias.
  - Adição, edição e remoção de itens no carrinho.
  - Integração com a API RESTful.

---

## 🚀 Tecnologias Utilizadas

### **Back-End:**
- Java 17+
- Spring Boot
- Hibernate (JPA)
- MySQL

### **Front-End:**
- React
- Vite
- Axios

### **Ferramentas:**
- IntelliJ IDEA
- MySQL Workbench
- Postman

---

## 🛠️ Instalação e Execução

### **Pré-requisitos**
- Node.js 16+ e npm/yarn instalados.
- JDK 17+ instalado.
- MySQL instalado e configurado.

### **1. Clone o Repositório**
```bash
git clone https://github.com/vitoriaguidines/letterboxd-react.git
cd letterboxd-react
```

### **2. Configuração do Back-End**
1. Acesse o diretório `src/main/resources` e configure o arquivo `application.properties` com as credenciais do MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/letterboxd
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.jpa.hibernate.ddl-auto=update
   ```

2. Compile e execute o servidor:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. O servidor será iniciado em:
   ```
   http://localhost:8080
   ```

### **3. Configuração do Front-End**
1. Acesse o diretório `front-end` e instale as dependências:
   ```bash
   cd front-end
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. O front-end será iniciado em:
   ```
   http://localhost:5173
   ```

---

## 🧪 Testes

### **Back-End**
- Use ferramentas como Postman ou Insomnia para testar os endpoints da API.

### **Front-End**
- Certifique-se de que o front-end está comunicando-se corretamente com o back-end.

---

## 📦 Endpoints Principais

### **Produtos**
- `GET /produtos` - Recupera todos os produtos.
- `POST /produtos` - Cadastra um novo produto.
- `PUT /produtos` - Atualiza um produto existente.
- `DELETE /produtos/{id}` - Remove um produto.

### **Carrinhos**
- `GET /carrinhos` - Recupera todos os carrinhos.
- `POST /carrinhos/criar` - Cria um novo carrinho.

---

## 📚 Recursos Adicionais

- Documentação da API (Swagger ou Postman Collection, se disponível).
- Banco de dados inicializado automaticamente no `run` da aplicação back-end.

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 💻 Desenvolvido por

- [@vitoriaguidines](https://github.com/vitoriaguidines)

Se você gostou do projeto, ⭐ este repositório!

