import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Lateral() {
  return (
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
              <Link to="#">Dreams já é capaz de rodar no PlayStation 5</Link>
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
                Sonic at the Olympic Games – Tokyo 2020 em maio para celulares
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
              <Link to="#">Call of Duty: filme é adiado pela Activision</Link>
            </h3>
          </div>
        </div>
      </div>
    </aside>
  );
}
