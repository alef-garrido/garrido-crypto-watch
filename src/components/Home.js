import React from 'react';
import Coins from './Coins';
import Header from './Header';
import '../styles/home.css';

function Home() {
  return (
    <main>
      <div className="head--display">
        <Header />
      </div>
      <div className="list--display">
        <Coins />
      </div>
    </main>
  );
}

export default Home;
