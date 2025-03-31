# 🚀 CMS KiSite - Strapi

Bem-vindo ao CMS KiSite, uma aplicação Strapi desenvolvida para gerenciar conteúdo de forma eficiente e flexível.

## 📋 Sobre o Projeto

Este projeto é um CMS (Sistema de Gerenciamento de Conteúdo) construído com Strapi, oferecendo uma interface amigável para gerenciar diversos tipos de conteúdo como artigos, autores, categorias e configurações globais do site.

### Funcionalidades Principais

- **Gerenciamento de Artigos**: Crie e gerencie artigos com título, descrição, imagem de capa e conteúdo rico.
- **Autores**: Cadastre e gerencie informações sobre os autores dos artigos.
- **Categorias**: Organize seus artigos em categorias para melhor navegação.
- **Configurações Globais**: Defina configurações gerais do site como nome, descrição e favicon.
- **SEO Otimizado**: Componentes para gerenciamento de metadados SEO para cada conteúdo.
- **API GraphQL**: Acesso aos dados via API GraphQL para integração com front-end.
- **Documentação da API**: Plugin de documentação integrado para facilitar o uso da API.

## 🔧 Requisitos

- Node.js (versão >=18.0.0 <=22.x.x)
- NPM (versão >=6.0.0)
- PostgreSQL

## ⚙️ Instalação

1. Clone o repositório:
   ```
   git clone [URL_DO_REPOSITÓRIO]
   cd Cms-KiSite
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=[chaves_geradas_aleatoriamente]
   API_TOKEN_SALT=[salt_gerado_aleatoriamente]
   ADMIN_JWT_SECRET=[segredo_jwt_admin]
   TRANSFER_TOKEN_SALT=[salt_token_transferencia]
   
   # Configuração do Banco de Dados PostgreSQL
   DATABASE_CLIENT=postgres
   DATABASE_URL=[string_conexao_postgres]
   PGHOST=[host_postgres]
   PGPORT=[porta_postgres]
   PGDATABASE=[nome_banco_dados]
   PGUSER=[usuario_postgres]
   PGPASSWORD=[senha_postgres]
   DATABASE_SCHEMA=public
   DATABASE_POOL_MIN=2
   DATABASE_POOL_MAX=10
   ```

## 🚀 Iniciando o Projeto

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com recarga automática:

```
npm run develop
```

O painel administrativo estará disponível em: `http://localhost:1337/admin`

### Produção

Para construir o painel administrativo:

```
npm run build
```

Para iniciar o servidor em modo de produção:

```
npm run start
```

### Populando Dados de Exemplo

O projeto inclui um script para popular o banco de dados com dados de exemplo:

```
npm run seed:example
```

## 📚 Estrutura do Projeto

- `/config`: Configurações do Strapi (banco de dados, servidor, plugins)
- `/src/api`: Definição dos tipos de conteúdo e APIs
  - `/article`: Gerenciamento de artigos
  - `/author`: Gerenciamento de autores
  - `/category`: Gerenciamento de categorias
  - `/global`: Configurações globais do site
  - `/about`: Informações sobre o site
- `/src/components`: Componentes reutilizáveis
  - `/shared`: Componentes compartilhados (rich-text, media, quote, slider, seo)
- `/public`: Arquivos públicos e uploads

## 🔌 APIs Disponíveis

O CMS disponibiliza APIs REST e GraphQL para acesso aos dados:

- **REST API**: Disponível em `http://localhost:1337/api/[content-type]`
- **GraphQL**: Disponível em `http://localhost:1337/graphql`
  - Em ambiente de desenvolvimento, o GraphQL Playground está habilitado para testar queries

## 📝 Documentação da API

A documentação da API está disponível através do plugin de documentação:

```
http://localhost:1337/documentation
```

## 🔒 Segurança

O Strapi oferece um sistema de autenticação e autorização robusto. Certifique-se de configurar corretamente as permissões para cada tipo de conteúdo no painel administrativo.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

---

Desenvolvido com ❤️ usando [Strapi](https://strapi.io)
