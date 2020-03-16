import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDice,
  FaSearch,
} from 'react-icons/fa';

import './styles.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              TechGames <FaDice color="rgb(170, 82, 179)" />
            </Link>
          </div>

          <div className="social-medias">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitterSquare />
            </span>
          </div>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/category/pc">Pc</Link>
          </li>
          <li>
            <Link to="/category/one">Xbox One</Link>
          </li>
          <li>
            <Link to="/category/ps4">Ps4</Link>
          </li>
          <li>
            <Link to="/category/switch">Nitendo Switch</Link>
          </li>
          <li>
            <Link to="/category/360">Xbox 360</Link>
          </li>
          <li>
            <Link to="/category/ps3">Ps3</Link>
          </li>
          <li>
            <Link to="/category/3ds">3ds</Link>
          </li>
          <li>
            <Link to="/category/psvita">Ps Vita</Link>
          </li>
          <li>
            <Link to="/category/wiiu">Wii U</Link>
          </li>
          <form action="/post/search" className="search" method="get">
            <input
              type="text"
              name="result"
              id="result"
              placeholder="Pesquisar"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </ul>
      </nav>
    </>
  );
}
