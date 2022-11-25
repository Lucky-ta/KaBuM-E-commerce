/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoReorderThreeOutline } from 'react-icons/io5';
import KabumLogo from '../../public/favicon/kabum.png';

function Header() {
  return (
    <div>
      <img src={KabumLogo.src} alt="kabum-logo" />
      <div>
        <input type="text" aria-label="Busca..." placeholder="Busca..." />
        <button type="button">
          <AiOutlineSearch />
        </button>
      </div>
      <button type="button">
        <AiOutlineShoppingCart />
      </button>
      <button type="button">
        <IoReorderThreeOutline />
      </button>
    </div>
  );
}

export default Header;
