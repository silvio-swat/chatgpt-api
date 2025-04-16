# ChatGPT API Clone
#### Projeto fullstack que simula uma interface de chat com a API da OpenAI, utilizando Node.js (Express) no backend e React no frontend. Ideal para fins educacionais e testes locais.

## 📁 Estrutura do Projeto
- server/   # Backend Node.js com Express
- web/      # Frontend React

## 🚀 Funcionalidades
- Envio de prompts para a API da OpenAI
- Interface de chat responsiva
- Tratamento de erros com mensagens amigáveis
- Separação clara entre frontend e backend

## ⚙️ Tecnologias Utilizadas
- Backend: Node.js, Express, dotenv, OpenAI SDK
- Frontend: React, Axios
- Outros: Git, GitHub

## 🛠️ Pré-requisitos
- Node.js v18 ou superior
- Conta na OpenAI com uma chave de API válida
- Git instalado

## 🔧 Instalação
1. Clone o repositório:
```sh
git clone git@github.com:silvio-swat/chatgpt-api.git
cd chatgpt-api
```
2. Configure o backend:

```sh
cd server
cp .env.example .env  # Crie o arquivo .env com sua chave da OpenAI
npm install
npm start
```

3. Configure o frontend:
```sh
cd ../web
npm install
npm start
```

## 🧪 Testando a Aplicação
- Acesse o frontend em: http://localhost:3000

- O backend estará rodando em: http://localhost:5000

## ❗ Observações
Se você não possui uma chave de API da OpenAI ou atingiu o limite de uso, a aplicação exibirá mensagens de erro apropriadas.

Este projeto é destinado a fins educacionais e testes locais.
