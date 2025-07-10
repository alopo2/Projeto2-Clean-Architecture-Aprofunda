# Projeto de API com Clean Architecture usando TypeScript e Express

Este projeto é uma API simples de biblioteca, implementada com Clean Architecture, utilizando TypeScript e Express. A API permite criar e listar livros.

## Tecnologias utilizadas

- Node.js
- Express.js
- Nodemon
- Cors
- Supertest
- Jest

## Instalação

Clone este repositório:

``git clone + endereço do repositório``

Entre na pasta do projeto:

``cd nome-da-pasta``

Instale as dependências:

``npm install``

Inicie o servidor:

``npm run dev``

Obs: Certifique-se de ter o Node.js e o npm instalados em sua máquina. Além disso, é necessário ter o TypeScript instalado globalmente. Você pode instalar o TypeScript com o seguinte comando:

``npm install -g typescript``

## Testes

Para verificar a cobertura de testes, você pode usar o seguinte comando:

``npm run test:coverage``

Para rodar os testes, utilize:

``npm run test``

## Rotas

Nessa API, temos as seguintes rotas:

- **GET /**: Retorna uma mensagem de boas-vindas.
- **GET /books**: Retorna todos os livros.
- **POST /book**: Cria um novo livro.
- **GET /book/:id**: Retorna um livro específico pelo ID.
- **PATCH /book/:id**: Atualiza um livro específico pelo ID.
- **DELETE /book/:id**: Deleta um livro específico pelo ID.

## Exemplo de uso

## Para criar um livro, você pode enviar uma requisição POST para a rota `/book` com o seguinte corpo

```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "content": "Uma história épica de fantasia.",
  "status": "disponível"
}
```

![Rota POST criando um livro](image-1.png)

O resultado será uma mensagem de sucesso indicando que o livro foi criado com sucesso.

## Para listar todos os livros, você pode enviar uma requisição GET para a rota `/books`. O resultado será um array com todos os livros cadastrados

![Rota GET retornando o livro criado](image.png)

## Para deletar um livro, você pode enviar uma requisição DELETE para a rota `/book/:id`, onde `:id` é o ID do livro que você deseja deletar

```json
{
  "message": "Livro com ID 1 deletado com sucesso!",
}
```

## Para atualizar um livro, você pode enviar uma requisição PATCH para a rota `/book/:id` com o seguinte corpo - ou outro corpo que desejar

```json
{
  "title": "O Senhor dos Anéis - Edição Atualizada",
}
```

## Próximos passos

- Aumentar a cobertura de testes para 100%.
- Implementar mais testes unitários.
- Adicionar validação de entrada para as rotas.
- Implementar autenticação e autorização
- Adicionar imagens dos testes com Delete e Patch

Projeto desenvolvido por Ângela Carvalho
