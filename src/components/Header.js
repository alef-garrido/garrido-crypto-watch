/* eslint-disable react/prop-types */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logoTitle from '../assets/logo.png';
import '../styles/header.css';

function Header(props) {
  const { searchInput, assets, changeHandler } = props;
  return (
    <header className="header--container">
      <div className="header--title">
        <div className="title--logo">
          <img alt="" src={logoTitle} />
        </div>
        <div>
          <h1>
            Crypto
            <br />
            Watcher
          </h1>
          <p className="header--subtitle">
            {`${assets.length} listed coins.`}
          </p>
        </div>
      </div>
      <form>
        <div className="header--search-icon">
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
