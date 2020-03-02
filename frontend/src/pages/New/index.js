import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import avatar from '../../assets/avatar.svg';

import './styles.css';

export default function New() {
  return (
    <>
      <form method="post" encType="multipart/form-data" className="form-post">
        <h2>Banner</h2>
        <label htmlFor="banner">
          <img src={avatar} alt="" height="40" />

          <input type="file" name="banner" id="banner" />
        </label>

        <label htmlFor="titulo">
          <h2>Titulo do Post</h2>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Titulo da sua postagem"
          />
        </label>

        <label htmlFor="categoria">
          <h2>Categoria</h2>
          <select name="categoria" id="categoria">
            <option value="pc">Pc</option>
            <option value="xbox one">Xbox One</option>
            <option value="ps4">Ps4</option>
            <option value="nitendo switch">Nitendo Switch</option>
            <option value="xbox 360">Xbox 360</option>
            <option value="ps3">Ps3</option>
            <option value="3ds">3ds</option>
            <option value="ps vita">Ps Vita</option>
            <option value="wii u">Wii U</option>
          </select>
        </label>

        <label>
          <h2>Conteúdo</h2>
          <Editor
            apiKey="47lya46vymryycmd82v9741zgiby49koy2ncr4o06pqwvj6s"
            init={{
              height: 400,
              plugins: ['image', 'media', 'pageembed', 'code', 'link'],
            }}
          />
        </label>

        <button type="submit">Publicar</button>
      </form>
    </>
  );
}
