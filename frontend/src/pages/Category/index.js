import React, { useEffect, useState } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import './styles.css';
import Lateral from '../../components/Lateral';

const Category = props => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function loadCategory() {
      const { match } = props;
      let { category } = match.params;

      const response = await api.get(`category/${category}`);

      const data = response.data.map(c => ({
        ...c,
        timeDistance: formatDistance(parseISO(c.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setCategory(data);
    }

    loadCategory();
  }, []);
  return (
    <section className="feed">
      <div className="feed-content">
        <section className="categorias">
          {category.map(c => (
            <>
              <article key={c.id} className="novidade-post">
                <a
                  href={`/post/${c.id}/${c.slug}`}
                  className="novidade-post-link">
                  <div className="novidade-post-img">
                    <img
                      src={`http://localhost:3333/files/${c.banner}`}
                      alt=""
                    />
                  </div>
                  <div className="novidade-post-text">
                    <span>{c.timeDistance}</span>
                    <h1>{c.titulo}</h1>
                  </div>
                </a>
              </article>
            </>
          ))}
        </section>

        <Lateral />
      </div>
    </section>
  );
};

export default Category;
