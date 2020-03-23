import React, { useMemo, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import avatar from '../../assets/avatar.svg';

import api from '../../services/api';

import './styles.css';

export default function New({ history }) {
  const [banner, setBanner] = useState(null);
  const [titulo, setTitulo] = useState();
  const [categoria, setCategoria] = useState('pc');
  const [conteudo, setConteudo] = useState();

  const preview = useMemo(() => {
    return banner ? URL.createObjectURL(banner) : null;
  }, [banner]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    data.append('banner', banner);
    data.append('titulo', titulo);
    data.append('categoria', categoria);
    data.append('conteudo', conteudo);

    await api.post('/post/new', data);

    history.push('/');
  }

  function handleEditorChange(content) {
    setConteudo(content);
  }

  function handleChange(event) {
    setCategoria(event.target.value);
  }
  return (
    <>
      <form method="post" className="form-post" onSubmit={handleSubmit}>
        <h2>Banner</h2>
        <label
          htmlFor="banner"
          style={{
            backgroundImage: `url(${preview})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={banner ? 'has-banner' : ''}>
          <input
            type="file"
            name="banner"
            id="banner"
            onChange={e => setBanner(e.target.files[0])}
          />

          <img src={avatar} alt="" height="40" />
        </label>

        <label htmlFor="titulo">
          <h2>Titulo do Post</h2>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Titulo da sua postagem"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </label>

        <label htmlFor="categoria">
          <h2>Categoria</h2>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={handleChange}>
            <option value="pc">Pc</option>
            <option value="one">Xbox One</option>
            <option value="ps4">Ps4</option>
            <option value="switch">Nitendo Switch</option>
            <option value="360">Xbox 360</option>
            <option value="ps3">Ps3</option>
            <option value="3ds">3ds</option>
            <option value="psvita">Ps Vita</option>
            <option value="wiiu">Wii U</option>
          </select>
        </label>

        <label>
          <h2>Conteúdo</h2>
          <Editor
            apiKey="47lya46vymryycmd82v9741zgiby49koy2ncr4o06pqwvj6s"
            init={{
              height: 400,
              plugins: ['image', 'media', 'code', 'link'],
            }}
            onEditorChange={handleEditorChange}
          />
        </label>

        <button type="submit">Publicar</button>
      </form>
    </>
  );
}
