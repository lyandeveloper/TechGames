import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Lateral from '../../components/Lateral';

const Search = props => {
  const { location } = props;
  const query = location.search;

  const [search, setSearch] = useState([]);
  useEffect(() => {
    async function loadSearch() {
      const response = await api.get(`/post/search${query}`);

      setSearch(response.data);
    }
    loadSearch();
  }, []);
  return (
    <>
      <section className="feed">
        <div className="feed-content">
          <section className="categorias">
            <h1>Resultados</h1>

            {search.map(s => (
              <article key={s.id} className="novidade-post">
                <a
                  href={`/post/${s.id}/${s.slug}`}
                  className="novidade-post-link">
                  <div className="novidade-post-img">
                    <img
                      src={`http://localhost:3333/files/${s.banner}`}
                      alt=""
                    />
                  </div>
                  <div className="novidade-post-text">
                    <span>há mais de 1 hora</span>
                    <h1>{s.titulo}</h1>
                  </div>
                </a>
              </article>
            ))}
          </section>

          <Lateral />
        </div>
      </section>
    </>
  );
};

export default Search;
