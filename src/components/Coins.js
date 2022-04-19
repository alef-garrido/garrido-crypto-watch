import React from 'react';
import { useSelector } from 'react-redux';
import CoinItem from './CoinItem';
import '../styles/coinList.css';

function Home() {
  const coins = useSelector((state) => state.coins.list);
  const status = useSelector((state) => state.coins.isloading);
  return (
    <div className="home--container">
      <ul className="home--list-container">
        {
          status
            ? 'loading'
            : coins.map((coin) => <CoinItem key={coin.id} data={coin} />)
        }
      </ul>
    </div>
  );
}

export default Home;
