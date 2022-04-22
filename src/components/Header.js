/* eslint-disable react/prop-types */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/header.css';

function Header(props) {
  const { searchInput, assets, changeHandler } = props;
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
          onChange={changeHandler}
          value={searchInput}
        />
      </form>
    </header>
  );
}

export default Header;
