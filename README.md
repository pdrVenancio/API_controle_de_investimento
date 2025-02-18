# API de Investimentos

Esta é uma API para gerenciar investimentos, permitindo cadastrar, listar, atualizar e excluir investimentos. A API foi desenvolvida em Node.js com Express e MongoDB, e utiliza o Swagger para documentação interativa.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos investimentos.
- **Mongoose**: Biblioteca para modelagem de dados do MongoDB.
- **Swagger**: Documentação interativa da API.
- **Postman**: Ferramenta para testar as rotas da API.

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou MongoDB Atlas)
- [Postman](https://www.postman.com/) (opcional, para testar as rotas)

---

## Como Rodar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as Dependências

No diretório do projeto, execute:

```bash
npm install
```

### 3. Configure o Ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
DATABASE_URL=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
PORT=5000
```

- Substitua `<usuario>`, `<senha>` e `<nome-do-banco>` pelas credenciais do seu MongoDB.
- Se estiver usando um banco local, a URL pode ser algo como mongodb://localhost:27017/investimentos.

### 4. Inicie o Servidor

Execute o seguinte comando para iniciar o servidor:

```bash
npm start
```

O servidor estará rodando em http://localhost:5000.

## Rotas da API

A API possui as seguintes rotas:

### 1. Criar um Investimento

- **Método:** POST
- **URL:** /api/investments
- **Body (JSON):**

  ```
  {
      "name": "Fundo X",
      "type": "Fundo",
      "value": 1000,
      "investmentDate": "2023-10-01"
  }
  ```

### 2. Listar Todos os Investimentos

- **Método:** GET
- **URL:** /api/investments

### 3. Atualizar um Investimento

- **Método:** PUT
- **URL:** /api/investments/:id
- **Body (JSON):**

  ```
   {
       "name": "Fundo X Atualizado",
       "type": "Fundo",
       "value": 1500,
       "investmentDate": "2023-10-05"
   }
  ```

### 4. Excluir um Investimento

- **Método:** DELETE
- **URL:** /api/investments/:id

## Documentação com Swagger

A documentação interativa da API está disponível em:

[`http://localhost:5000/api-docs`](http://localhost:5000/api-docs)

No Swagger UI, você pode:

* Visualizar todas as rotas.
* Testar as requisições diretamente na interface.
* Ver exemplos de requisições e respostas.

## Testando a API

### 1. Usando o Postman

1. Importe a coleção do Postman (se disponível).
2. Configure as requisições para as rotas da API.
3. Envie as requisições e verifique as respostas.

### 2. Usando o Swagger UI

1. Acesse `http://localhost:5000/api-docs`.
2. Clique em uma rota para expandir os detalhes.
3. Use o botão **Try it out** para testar a rota.

## Estrutura do Projeto

back/<br>
├── src/<br>
│   ├── controllers/<br>
│   │   └── investmentController.jsv
│   ├── models/<br>
│   │   └── investmentModel.js<br>
│   ├── routes/<br>
│   │   └── investmentRoutes.js<br>
│   ├── config/<br>
│   │   └── db.js<br>
│   └── server.js<br>
├── .env<br>
├── .gitignore<br>
├── package.json<br>
└── README.md<br>

## Contato

Se tiver dúvidas ou sugestões, entre em contato:

* Nome: Pedro Venâncio dos Santos
* GitHub: [seu-usuario](https://github.com/pdrVenancio)
