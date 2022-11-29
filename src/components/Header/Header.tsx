/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import KabumLogo from '../../public/favicon/kabum.png';

function Header() {
  return (
    <div className="flex items-center p-3 bg-[#0060b1]">
      <img width="45em" src={KabumLogo.src} alt="kabum-logo" />
      <div className="w-full">
        <input
          className="rounded-md px-2.5 py-1.5 ml-4 w-4/5"
          type="text"
          aria-label="Busca..."
          placeholder="Busca..."
        />
        <button
          className="absolute text-slate-500 -translate-x-6 pt-2.5 pb-3 pr-2"
          type="button"
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div className="flex gap-4 m-auto mr-2">
        <button className="text-xl text-stone-300/50" type="button">
          <FaShoppingCart />
        </button>
        <button className="text-3xl text-stone-300/50" type="button">
          <IoReorderThreeOutline />
        </button>
      </div>
    </div>
  );
}

export default Header;
