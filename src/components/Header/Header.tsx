/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import * as HeaderComponents from './index';
import KabumLogo from '../../public/favicon/kabum.png';

function Header() {
  return (
    <HeaderComponents.HeaderContainer>
      <HeaderComponents.KabumLogo src={KabumLogo.src} alt="kabum-logo" />
      <div>
        <HeaderComponents.SearchInput type="text" aria-label="Busca..." placeholder="Busca..." />
        <HeaderComponents.SearchButton type="button">
          <AiOutlineSearch />
        </HeaderComponents.SearchButton>
      </div>
      <HeaderComponents.TransparentButton type="button">
        <FaShoppingCart />
      </HeaderComponents.TransparentButton>
      <HeaderComponents.TransparentButton type="button">
        <IoReorderThreeOutline />
      </HeaderComponents.TransparentButton>
    </HeaderComponents.HeaderContainer>
  );
}

export default Header;
