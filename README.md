# Back-End Projeto final

Parte de Banco de dados e Back-End do Projeto final do segundo semestre do curso de Desenvolvimento de Sistemas

## Descrição

Este repositório contém a implementação do back-end e a estrutura de banco de dados para o Projeto Final do segundo semestre do curso de Desenvolvimento de Sistemas. Aqui estão concentradas todas as APIs, scripts, e configurações responsáveis por fornecer os dados e funcionalidades essenciais para o funcionamento do sistema.

## Tecnologias Utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) 
- <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=fff" alt="Tecnologia: Node.js"/>
- <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff" alt="Tecnologia: PostgreSQL"/>

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

Feito por Beatriz Tsumoto, Victor Boehm, Julia Degrava, Nathalia Nascimento, Melissa Freitas, Pedro Brito

https://github.com/beatriztsumoto
https://github.com/vboehm09
https://github.com/juliadegrava
https://github.com/NathaliaNascimentoReis
https://github.com/Melfreitass
https://github.com/PedrohBrito
