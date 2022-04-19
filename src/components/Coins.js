import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const coins = useSelector((state) => state.coins.list);
  const status = useSelector((state) => state.coins.isloading);
  return (
    <div className="home--container">
      <ul className="home--list-container">
        {
          status
            ? 'loading'
            : coins.map((coin) => console.log(coin))
        }
      </ul>
    </div>
  );
}

export default Home;
