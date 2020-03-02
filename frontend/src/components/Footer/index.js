import React from 'react';
import { Link } from 'react-router-dom';
import { FaDice } from 'react-icons/fa';

import './styles.css';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer>
        <div className="logo">
          <Link to="/">
            TechGames <FaDice color="rgb(170, 82, 179)" />
          </Link>
        </div>
        <span>
          &copy; copyright <span id="ano">{year}</span> - Elian Campos, Todos os
          direitos reservados
        </span>
      </footer>
    </>
  );
}
