# Visualizador de Perfil do GitHub

Como parte do curso Devquest 2.0, Criei uma Aplicação web que permite pesquisar um usuário do GitHub e visualizar, em uma única página, as principais informações públicas do perfil e seus repositórios recentes. 

## Funcionalidades

- Busca de usuários pelo nome de usuário do GitHub;
- exibição de avatar, nome e biografia;
- contadores de seguidores e perfis seguidos;
- listagem de até 10 repositórios, ordenados pela data de criação;
- exibição de estrelas, forks, watchers e linguagem de cada repositório;
- links para abrir os repositórios diretamente no GitHub;
- busca pelo botão ou pela tecla `Enter`;
- indicadores de carregamento e mensagens para campos vazios ou usuários não encontrados;
- layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript moderno (ES Modules, Fetch API e async/await);
- [GitHub REST API](https://docs.github.com/pt/rest);
- [Devicon](https://devicon.dev/) para o ícone do GitHub;
- [Google Fonts](https://fonts.google.com/) para a fonte Inter.

## Como executar o projeto

### Pré-requisitos

Você precisa apenas de um navegador moderno e de um servidor HTTP local. Nenhuma dependência precisa ser instalada.

1. Clone o repositório:

   ```bash
   git clone https://github.com/Eleilson-LiL/visualizador-perfil-github.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd visualizador-perfil-github
   ```

3. Inicie um servidor local. Com Python, por exemplo:

   ```bash
   python -m http.server 5500
   ```

4. Acesse [http://localhost:5500](http://localhost:5500) no navegador.

Também é possível usar uma extensão como **Live Server** no Visual Studio Code. O uso de um servidor local é recomendado porque o projeto utiliza módulos JavaScript.

## Como usar

1. Digite um nome de usuário válido do GitHub no campo de busca.
2. Clique em **Buscar** ou pressione `Enter`.
3. Consulte os dados do perfil e clique em um dos cards para abrir o respectivo repositório.

## Integração com a API do GitHub

A aplicação utiliza os seguintes endpoints públicos:

```text
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?per_page=10&sort=created
```

As requisições são feitas sem autenticação. Por isso, estão sujeitas ao limite de requisições da API pública do GitHub. Nenhum token é necessário para executar o projeto em seu estado atual.

## Estrutura do projeto

```text
visualizador-perfil-github/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── animations.css
    │   ├── reset.css
    │   ├── responsive.css
    │   └── styles.css
    └── js/
        ├── githubApi.js
        ├── index.js
        └── profileView.js
```

- `githubApi.js`: concentra as requisições à API do GitHub;
- `index.js`: gerencia os eventos de busca, o carregamento e os erros;
- `profileView.js`: monta e renderiza os dados recebidos na interface;
- `styles.css`, `responsive.css` e `animations.css`: definem o visual, a adaptação a diferentes telas e as animações.

## Observações

- Somente informações públicas disponibilizadas pela API do GitHub são exibidas.
- Caso um perfil não tenha nome, biografia, linguagem ou repositórios cadastrados, a interface apresenta os valores alternativos definidos pela aplicação.
- O projeto ainda não possui uma licença de uso definida.

## Autor

Desenvolvido por [Eleilson Da Silva](https://github.com/Eleilson-LiL).
