# Back-End Projeto final

Parte de Banco de dados e Back-End do Projeto final do segundo semestre do curso de Desenvolvimento de Sistemas

## Descrição

Este repositório contém a implementação do back-end e a estrutura de banco de dados para o Projeto Final do segundo semestre do curso de Desenvolvimento de Sistemas. Aqui estão concentradas todas as APIs, scripts, e configurações responsáveis por fornecer os dados e funcionalidades essenciais para o funcionamento do sistema.

## Tecnologias Utilizadas

- **JavaScript** (Node.js)
- Banco de dados relacional (especificar qual foi utilizado, por exemplo: MySQL, PostgreSQL, SQLite)
- Ferramentas de desenvolvimento (especificar, se houver: Express, Sequelize, etc.)

## Estrutura do Projeto

```
├── prisma/
    ├── migrations/
    ├── schema.prisma
    ├── seed.js
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
├── package-lock.json
├── package.json
└── server.js
```

## Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/beatriztsumoto/Back-End-Projeto-final.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Back-End-Projeto-final
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Configure o banco de dados:**  
   Edite o arquivo de configuração com seus dados de acesso (em `config/`, se houver).

5. **Execute a aplicação:**
   ```bash
   npm start
   ```
   ou
   ```bash
   node src/app.js
   ```

## Funcionalidades

- CRUD de entidades principais do sistema
- Autenticação e autorização de usuários
- Integração com o banco de dados
- Rotas RESTful para consumo via front-end ou outras aplicações

## Contribuição

Sinta-se livre para abrir Issues ou Pull Requests para sugerir melhorias ou relatar problemas.

## Licença

Este projeto é apenas para fins educacionais, como parte do curso de Desenvolvimento de Sistemas.  
Caso deseje utilizar para outros fins, entre em contato com os autores.

---

Feito por [Beatriz Tsumoto], [Victor Boehm], [Julia Degrava], [Nathalia Nascimento], [Melissa Freitas], [Pedro Brito]
