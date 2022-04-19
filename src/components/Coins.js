import React from 'react';
import CoinItem from './CoinItem';

function Home() {
  return (
    <div className="home--container">
      <ul className="home--list-container">
        <CoinItem />
      </ul>
    </div>
  );
}

export default Home;
