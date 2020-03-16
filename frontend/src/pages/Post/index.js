import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { FacebookProvider, Comments } from 'react-facebook';

import api from '../../services/api';

import './styles.css';
import Lateral from '../../components/Lateral';

const Post = props => {
  const [post, setPost] = useState([]);
  const { match } = props;
  let url = window.location.href;
  console.log(url);

  let { id } = match.params;
  let { slug } = match.params;

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(`/post/${id}/${slug}`);

      const data = response.data.map(p => ({
        ...p,
        timeDistance: formatDistance(parseISO(p.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setPost(data);
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
                  {p.timeDistance}
                </span>
              </div>
            </div>
          </section>
          <section className="post-feed">
            <div className="feed-post-content">
              <div className="post">
                <div
                  className="container"
                  dangerouslySetInnerHTML={{ __html: p.conteudo }}
                />
                <FacebookShareButton url={url}>
                  <FacebookIcon type="button" size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                  <TwitterIcon type="button" size={40} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={url}>
                  <WhatsappIcon type="button" size={40} round={true} />
                </WhatsappShareButton>

                <FacebookProvider appId="1383288691873657">
                  <Comments href={url} />
                </FacebookProvider>
              </div>
              <Lateral />
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Post;
