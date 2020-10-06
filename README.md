<h1 align="center">
  TechGames
</h1>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lyandeveloper/TechGames">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/lyandeveloper/TechGames">

  <a href="https://github.com/lyandeveloper/TechGames/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lyandeveloper/TechGames">
  </a>

  <a href="https://github.com/lyandeveloper/TechGames/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lyandeveloper/RSky">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <a href="https://github.com/lyandeveloper/">
    <img alt="Author" src="https://img.shields.io/badge/author-Elian%20Campos-blue">
  </a>
</p> 

<img src="assets/print1.png"/>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
</p>

<br> 

## 💻 Project
TechGames is a complete gaming news portal to stay on top of everything in the gaming world.<br>

## Technology
This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/) 
- [ReactJS](https://reactjs.org/) 
- [Postgres](https://www.postgresql.org/) 
- [DateFNS](https://date-fns.org/) 
- [Sequelize](https://sequelize.org/) 
- [Sucrase](https://github.com/alangpierce/sucrase) 

## Features

The portal has a posting system where the administrator places the post banner, title, category and post content, in which I implemented Tinymce to convert my text to HTML.

<img src="assets/print9.png"/>

<img src="assets/print10.png"/>

On the home page, all posts are ranked by the most recent. I used Date-FNS to calculate how much time has passed since posting.

<img src="assets/print2.png"/>

This is what it looks like when the user clicks on the post. Making it possible to watch videos and etc.

<img src="assets/print3.png"/>

<img src="assets/print4.png"/>

The user can share the post on social networks, as well as comment on it using Facebook.

<img src="assets/print5.png"/>

The portal also has a search system.

<img src="assets/print7.png"/>

There is also the possibility to see posts by category.

<img src="assets/print8.png"/>

## How to run

1. Clone the project.

2. When cloning, open both backend and frontend folder in an editor of your preference, install the dependencies on your terminal by typing:

```sh
yarn or npm
``` 

3. If you use docker, install a postgres container, otherwise install a postgres server on your machine. With that done, in the backend folder run migrations, typing:

```sh
yarn sequelize db:migrate or npx sequelize db:migrate
```

4. With that done, start both backend and frontend servers by typing:

```sh
yarn dev or npx dev
``` 

5. When you open the browser, access the route 'http://localhost:3000/post/new' to add a new post.

---

Made By ♥ [Elian Campos](https://github.com/lyandeveloper). Add me on [LinkedIn](https://www.linkedin.com/in/elian-campos/) :wave: 
