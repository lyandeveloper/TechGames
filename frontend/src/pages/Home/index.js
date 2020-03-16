import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import './styles.css';
import Lateral from '../../components/Lateral';
import api from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/');

      const data = response.data.map(post => ({
        ...post,
        timeDistance: formatDistance(parseISO(post.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <>
      <section className="destaques">
        <div className="bg" />
        <div className="posts">
          <article className="post-grande">
            <Link to="#" className="post-grande-link">
              <div className="post-overlay" />
              <img
                src="https://img.ibxk.com.br/2020/02/19/19155220485783.jpg?w=640&h=400&mode=crop"
                alt=""
              />
              <div className="post-grande-text">
                <span className="time">
                  <FaRegClock />
                  <p>Há 1 hora</p>
                </span>
                <h1>
                  PlayStation cancela participação no PAX East por conta do
                  coronavírus
                </h1>
              </div>
            </Link>
          </article>

          <div className="posts-pequeno">
            <article className="small-post">
              <Link to="#" className="small-post-link">
                <div className="post-overlay"></div>
                <img
                  src="https://img.ibxk.com.br/2020/02/19/19120044511564.jpg?w=640&h=400&mode=crop"
                  alt=""
                />
                <div className="small-post-text">
                  <span className="time">
                    <FaRegClock />
                    <p>Há 20 minutos</p>
                  </span>
                  <h1>
                    O Darksiders frenético que você já conhece, mas com gostinho
                    de novo
                  </h1>
                </div>
              </Link>
            </article>

            <article className="small-post">
              <Link to="#" className="small-post-link">
                <div className="post-overlay"></div>
                <img
                  src="https://img.ibxk.com.br/2020/02/19/19132604156649.jpg?w=640&h=400&mode=crop"
                  alt=""
                />
                <div className="small-post-text">
                  <span className="time">
                    <FaRegClock />
                    <p>Há 15 minutos</p>
                  </span>
                  <h1>
                    Xbox Series X terá hardware dedicado para melhoria de som
                  </h1>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="feed">
        <div className="feed-content">
          <section className="novidades">
            <h1 className="categoria-title">Novidades</h1>

            {posts.map(post => (
              <article key={post.id} className="novidade-post">
                <Link
                  to={`/post/${post.id}/${post.slug}`}
                  className="novidade-post-link">
                  <div className="novidade-post-img">
                    <img
                      src={`http://localhost:3333/files/${post.banner}`}
                      alt=""
                    />
                  </div>
                  <div className="novidade-post-text">
                    <span>{post.timeDistance}</span>
                    <h1>{post.titulo}</h1>
                  </div>
                </Link>
              </article>
            ))}
          </section>

          <Lateral />
        </div>
      </section>
    </>
  );
}
