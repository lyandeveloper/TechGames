import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

const Post = props => {
  const [post, setPost] = useState([]);
  const { match } = props;

  let { id } = match.params;
  let { slug } = match.params;

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(`/post/${id}/${slug}`, {
        ...post,
      });

      setPost(response.data);
    }

    loadPost();
  }, []);
  return (
    <>
      {post.map(p => (
        <>
          <section key={p.id} className="post">
            <div className="img-post">
              <div className="post-overlay" />
              <img src={`http://localhost:3333/files/${p.banner}`} alt="" />
              <div className="text">
                <h1 className="title-post">{p.titulo}</h1>
                <span className="time">
                  <span>
                    <FaRegClock />
                  </span>
                  Há 2 horas atrás
                </span>
              </div>
            </div>
          </section>
          <section className="post-feed">
            <div className="feed-post-content">
              <div className="post">
                <div className="container">{p.conteudo}</div>
              </div>

              <aside className="last-posts">
                <h2>Últimos Posts</h2>
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
                        Street Fighter V: Champion Edition tem problemas na
                        edição física do Brasil
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
              </aside>
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Post;
