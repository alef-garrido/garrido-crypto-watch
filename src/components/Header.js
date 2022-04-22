import React from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import '../styles/header.css';

function Header() {
  const assets = useSelector((state) => state.coins.list);
  return (
    <header className="header--container">
      <div className="header--title">
        <h1>CryptoWatcher</h1>
        <p className="header--subtitle">
          {`${assets.length} listed coins.`}
        </p>
      </div>
      <form>
        <div className="header--search">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
        />
      </form>
    </header>
  );
}

export default Header;
