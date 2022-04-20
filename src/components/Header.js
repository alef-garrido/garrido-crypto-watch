import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/header.css';

function Header() {
  const assets = useSelector((state) => state.coins.list);
  return (
    <header className="header--container">
      <form>
        <input
          type="text"
          placeholder="Search your coin"
        />
      </form>
      <div className="header--title">
        <h1>CryptoWatcher</h1>
        <p>
          {`${assets.length} listed coins.`}
        </p>
      </div>
    </header>
  );
}

export default Header;
