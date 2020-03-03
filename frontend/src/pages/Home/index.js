import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/', {
        ...posts,
      });

      setPosts(response.data);
    }

    loadPosts();
  }, []);

  return (
    <>
      <section className="destaques">
        <div className="bg"></div>
        <div className="posts">
          <article className="post-grande">
            <Link to="" className="post-grande-link">
              <div className="post-overlay"></div>
              <img
                src="https://img.ibxk.com.br/2020/02/19/19155220485783.jpg?w=640&h=400&mode=crop"
                alt=""
              />
              <div className="post-grande-text">
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
                    <span>há mais de 1 hora</span>
                    <h1>{post.titulo}</h1>
                  </div>
                </Link>
              </article>
            ))}
          </section>

          <aside className="lateral">
            <div className="last-posts">
              <h1 className="categoria-title">Mais lidas</h1>

              <div className="last-post">
                <div className="last-post-img">
                  <img
                    src="https://img1.ibxk.com.br/2020/02/17/17165518784295.jpg?w=210&h=124&mode=crop"
                    alt="nvidia"
                  />
                </div>
                <div className="last-post-text">
                  <h3>
                    <Link to="#">
                      Cuberpunk 2077: Nvidia sorteia placas gráficas temáticas
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="last-post">
                <div className="last-post-img">
                  <img
                    src="https://img2.ibxk.com.br/2020/02/17/17141651919211.jpg?w=210&h=124&mode=crop"
                    alt="nvidia"
                  />
                </div>
                <div className="last-post-text">
                  <h3>
                    <Link to="#">
                      Street Fighter V: Champion Edition tem problemas na edição
                      física do Brasil
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="last-post">
                <div className="last-post-img">
                  <img
                    src="https://img3.ibxk.com.br/2020/02/17/17122436782160.jpg?w=210&h=124&mode=crop"
                    alt="nvidia"
                  />
                </div>
                <div className="last-post-text">
                  <h3>
                    <Link to="#">
                      Dreams já é capaz de rodar no PlayStation 5
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="last-post">
                <div className="last-post-img">
                  <img
                    src="https://img1.ibxk.com.br/2020/02/16/16234128121001.jpg?w=210&h=124&mode=crop"
                    alt="nvidia"
                  />
                </div>
                <div className="last-post-text">
                  <h3>
                    <Link to="#">
                      Sonic at the Olympic Games – Tokyo 2020 em maio para
                      celulares
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="last-post">
                <div className="last-post-img">
                  <img
                    src="https://img3.ibxk.com.br/2020/02/16/16190902563000.jpg?w=210&h=124&mode=crop"
                    alt="nvidia"
                  />
                </div>
                <div className="last-post-text">
                  <h3>
                    <Link to="#">
                      Call of Duty: filme é adiado pela Activision
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
