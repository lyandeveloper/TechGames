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
            <a href="/category/pc">Pc</a>
          </li>
          <li>
            <a href="/category/one">Xbox One</a>
          </li>
          <li>
            <a href="/category/ps4">Ps4</a>
          </li>
          <li>
            <a href="/category/switch">Nitendo Switch</a>
          </li>
          <li>
            <a href="/category/360">Xbox 360</a>
          </li>
          <li>
            <a href="/category/ps3">Ps3</a>
          </li>
          <li>
            <a href="/category/3ds">3ds</a>
          </li>
          <li>
            <a href="/category/psvita">Ps Vita</a>
          </li>
          <li>
            <a href="/category/wiiu">Wii U</a>
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
