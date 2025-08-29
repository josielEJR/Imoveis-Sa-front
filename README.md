# Projeto Imóveis SA

Este projeto consiste em uma aplicação web completa com frontend React e API Node.js/Express.

## Estrutura do Projeto

- `api/` - Backend Node.js/Express
- `interface/` - Frontend React

## Instalação

Para instalar todas as dependências de uma vez:

```bash
npm run install:all
```

Ou instalar manualmente:

```bash
# Instalar dependências da raiz
npm install

# Instalar dependências da API
cd api && npm install

# Instalar dependências do Frontend
cd interface && npm install
```

## Executando o Projeto

### Opção 1: Rodar tudo junto (Recomendado)
```bash
npm start
```

Isso irá:
1. **Primeiro**: Iniciar a API com Docker (MySQL + Node.js)
2. **Aguardar**: A API responder no endpoint `/health` (porta 3001)
3. **Depois**: Iniciar o frontend React

**Vantagem**: O frontend só sobe quando a API estiver pronta, evitando erros de conexão e necessidade de F5.

### Opção 2: Rodar separadamente
```bash
# Terminal 1 - API
npm run start:api

# Terminal 2 - Frontend
npm run start:frontend
```

## Scripts Disponíveis

- `npm start` - **Sequencial**: Inicia API com Docker primeiro, aguarda estar pronta, depois inicia frontend
- `npm run start:docker` - Inicia apenas a API com Docker (MySQL + Node.js)
- `npm run start:api` - Inicia apenas a API Node.js (sem Docker)
- `npm run start:frontend` - Inicia apenas o frontend
- `npm run dev` - Alias para npm start (mesmo comportamento sequencial)
- `npm run build` - Build do frontend para produção
- `npm run test` - Executa testes do frontend
- `npm run install:all` - Instala todas as dependências
- `npm run docker:down` - Para e remove containers Docker
- `npm run docker:build` - Reconstrói as imagens Docker
- `npm run docker:logs` - Mostra logs dos containers Docker

## Portas

- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001

## Docker

A API está configurada com Docker Compose e inclui:

- **MySQL 5.7** na porta 3306
- **API Node.js** na porta 3001
- **Volumes** para persistência de dados
- **Health checks** para garantir que o MySQL esteja rodando antes da API

### Comandos Docker úteis:

```bash
# Ver logs dos containers
npm run docker:logs

# Parar containers
npm run docker:down

# Reconstruir imagens
npm run docker:build
```

## Desenvolvimento

O projeto usa `wait-on` para garantir que a API esteja funcionando antes de iniciar o frontend:

1. **Inicia Docker Compose** (MySQL + API)
2. **Aguarda** a API responder em http://localhost:3001/health
3. **Inicia o frontend** React

Isso garante que quando o frontend abrir, a API já estará disponível, evitando erros de conexão e necessidade de recarregar a página (F5).
