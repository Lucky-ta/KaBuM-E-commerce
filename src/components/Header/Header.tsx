import React from 'react';
import KabumLogo from '../../public/favicon/kabum.png';

function Header() {
  return (
    <div>
      <img src={KabumLogo.src} alt="kabum-logo" />
      <div>
        <input type="text" aria-label="Busca..." placeholder="Busca..." />
        <button type="button">search</button>
      </div>
      <button type="button">cart</button>
      <button type="button">more options</button>
    </div>
  );
}

export default Header;
