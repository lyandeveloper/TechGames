import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Carousel from 're-carousel';
import Buttons from '../../components/buttons';
import IndicatorDots from '../../components/indicator-dots';

import './styles.css';
import Lateral from '../../components/Lateral';
import api from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [recent, setRecent] = useState([]);

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

  useEffect(() => {
    async function loadRecents() {
      const response = await api.get('/post/recents');

      const data = response.data.map(r => ({
        ...r,
        timeDistance: formatDistance(parseISO(r.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setRecent(data);
    }

    loadRecents();
  }, []);

  return (
    <>
      <section className="swiper-container">
        <div className="bg">
          <Carousel
            className="swiper-wrapper"
            loop
            auto
            widgets={[IndicatorDots, Buttons]}>
            {recent.map(r => (
              <article key={r.id} className="swiper-slide">
                <Link
                  to={`/post/${r.id}/${r.slug}`}
                  className="post-grande-link">
                  <div className="post-overlay" />
                  <img src={`http://localhost:3333/files/${r.banner}`} alt="" />
                  <div className="post-grande-text">
                    <span className="time">
                      <FaRegClock />
                      <p>{r.timeDistance}</p>
                    </span>
                    <h1>{r.titulo}</h1>
                  </div>
                </Link>
              </article>
            ))}
          </Carousel>
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
