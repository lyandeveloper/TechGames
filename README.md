# TECHGAMES

Techgames é um portal de notícias sobre jogos, desenvolvido como afins de estudo. Todo o sistema foi desenvolvido usando conceito API REST, no backend NodeJS e no front ReactJS e POSTGRES para banco de dados.

<img src="print1.png"/>

## Features

O portal consta com um sistema de postagem onde o administrador coloca o banner da postagem, titulo, categoria e conteúdo do post, na qual implementei o Tinymce para postar o conteúdo em HTML.

<img src="print9.png"/>

<img src="print10.png"/>

Na página home, todos os posts são classificados pelo mais recentes. Usei o Date-FNS para calcular quanto tempo se passou desde a postagem.

<img src="print2.png"/>

Essa é a aparência quando o usuário clica na postagem. Possibilitando ver vídeos e etc.

<img src="print3.png"/>

<img src="print4.png"/>

O usuário poderá compartilhar a postagem nas redes sociais, assim como comentar o mesmo usando o Facebook.

<img src="print5.png"/>

O portal também consta com um sistema de pesquisa.

<img src="print7.png"/>

Também havendo a possiblidade de ver postagens por categoria.

<img src="print8.png"/>

## Como testar o portal

1. Dê um git clone no projeto.

2. Quando clonar, abra a pasta backend em um editor de sua prefência, instale as depêndencias no seu terminal digitando:

```sh
yarn ou npm
```

Faça isso também com a pasta frontend.

3. Se você usa docker instale um container postgres, senão instale um servidor postgres em sua máquina. Com isso feito, rode as migrations, na pasta backend no terminal digite:

```sh
yarn sequelize db:migrate ou npx sequelize db:migrate
```

4. Com isso feito, ainda na pasta backend, inicie o servidor rodando o comando:

```sh
yarn dev ou npx dev
```

5. Vá na pasta frontend e inicie o servidor rodando o comando:

```sh
yarn start ou npm start
```

6. Quando abrir o navegador, acesse a rota 'http://localhost:3333/post/new' para adicionar uma nova postagem.
