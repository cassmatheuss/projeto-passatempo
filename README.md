# Membros
- Giovanna Lara RA: 24.01779-5
  (fez página catálogo e doe)
- Matheus da Cunha Castilho RA: 23.01178-5
  (fez backend completo, paginas admin e login)
- Luisa Lério Leite RA: 24.01218-0
  (fez a página benefícios e doe)
- Tiago Tokugi de Albuquerque Massuda RA: 24.01217-3
  (fez a página Como Funciona, navbar e rodapé)
- Wilson Bittencourt RA: 23.01131-9
  (fez a home page e admin)

# Jogoteca Redesign

Este repositório contém o redesign do site **Jogoteca**, um dos projetos da instituição **Passatempo Educativo**. O novo site será desenvolvido utilizando **HTML**, **CSS** e **JavaScript** puro, com o gerenciamento de dependências feito através do **npm**.

## Objetivo

O principal objetivo deste redesign é melhorar a experiência do usuário, modernizar a interface, e otimizar o desempenho do site.

## Tecnologias Utilizadas

- **HTML5**: Estrutura e conteúdo das páginas.
- **CSS3**: Estilização das páginas, com foco em design responsivo.
- **JavaScript (ES6+)**: Funcionalidades dinâmicas e interatividade.
- **npm**: Gerenciamento de pacotes.

## Estrutura do Projeto

```bash
projeto-passatempo/
├── packages/
│   ├── backend/
│   │   └── config/
│   │   │   └── db.js
│   │   └── services/
│   │   │   └── email/
│   │   │   │   └── email.controler.js
│   │   │   │   └── email.model.js
│   │   │   │   └── email.respository.js
│   │   │   │   └── email.service.js
│   │   │   └── texts/
│   │   │   │   └── texts.controler.js
│   │   │   │   └── texts.model.js
│   │   │   │   └── texts.respository.js
│   │   │   │   └── texts.service.js
│   │   │   └── users/
│   │   │   │   └── users.controler.js
│   │   │   │   └── users.model.js
│   │   │   │   └── users.respository.js
│   │   │   │   └── users.service.js
│   │   └── index.js
│   └── frontend/
│       └── assets/
│       │   └── (todas as imagens do projeto)
│       └── pages/
│           └── catalogo/
│           │   └── catalogo.html
│           │   └── style.css
│           └── home/
│           │   └── home.html
│           │   └── script.js
│           │   └── style.css
│           └── comoFunciona/
│           │   └── formulario.js
│           │   └── index.html
│           │   └── script.js
│           │   └── styles.css
│           └── beneficios/
│           │   └── carrossel.js
│           │   └── index.html
│           │   └── navbar.js
│           │   └── script.js
│           │   └── style.css
│           └── doe/
│           │   └── Doe.html
│           │   └── index.js
│           │   └── style.css
│           └── login/
│           │   └── index.html
│           │   └── script.js
│           │   └── style.css
│           └── admin/
│               └── index.html
│               └── script.js
│               └── style.css
├── package.json
├── LICENSE
├── README.md
└── .gitignore
```

## Instalação e Configuração
Para rodar o projeto localmente, siga os passos abaixo:

abra o terminal e utilize o comando:
```bash
git clone https://github.com/cassmatheuss/projeto-passatempo.git
```

Abra o projeto no vsCode e instale as dependências utilizando o comando no terminal:
```bash
npm install
```
Para iniciar o servidor local, execute:
```bash
npm start
```
importante comentar também que a área restrita só funcionara com um arquivo .env contendo os links para as rotas, sem isso nenhuma das funcionalidades de alterar os textos funcionará e o login também não. O arquivo .env não fica no repositório por questões de segurança.

## Funcionalidades
Design responsivo para diversos dispositivos.
Navegação simplificada e otimizada.
Seções para diferentes tipos de jogos e atividades educativas.
Melhor desempenho e carregamento de páginas.
Contribuição
Se você deseja contribuir para o projeto, por favor, siga as instruções abaixo:

## Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
