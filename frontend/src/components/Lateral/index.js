import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';

import './styles.css';

export default function Lateral() {
  const [hots, setHots] = useState([]);

  useEffect(() => {
    async function loadHots() {
      const response = await api.get('/post/hots');

      const data = response.data.map(post => ({
        ...post,
        timeDistance: formatDistance(parseISO(post.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setHots(data);
    }

    loadHots();
  }, []);
  return (
    <aside className="lateral">
      <div className="last-posts">
        <h1 className="categoria-title">Mais lidas</h1>

        {hots.map(h => (
          <div className="last-post" key={h.id}>
            <div className="last-post-img">
              <img
                src={`http://localhost:3333/files/${h.banner}`}
                alt={h.titulo}
              />
            </div>
            <div className="last-post-text">
              <h3>
                <a href={`/post/${h.id}/${h.slug}`}>{h.titulo}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
