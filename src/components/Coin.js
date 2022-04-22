import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Coin() {
  const coins = useSelector((state) => state.coins.list);
  const url = document.URL.split('/')[3];
  const coinData = coins.filter((coin) => coin.symbol === url)[0];
  const getNum = (str) => (str * 1).toFixed(3);
  return (
    <div className="coin--info-container">
      <div className="coin--home-link">
        <Link to="/">
          <BsArrowLeftCircle />
        </Link>
      </div>
      <header className="coin--header-info">
        <p>coinData.symbol</p>
        <h3>{coinData.name}</h3>
      </header>
      <div className="coin--banner">Coin Detailed Brakedown</div>
      <div className="coin--info-container">
        <div className="coin--info-detail">
          <h4>Rank</h4>
          <p>{coinData.rank}</p>
        </div>
        <div className="coin--info-detail">
          <h4>Supply</h4>
          <p>{getNum(coinData.supply)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>Max-Supply</h4>
          <p>{getNum(coinData.maxSupply)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>MArket-Cap (USD)</h4>
          <p>{getNum(coinData.marketCapUsd)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>Volume last 24Hrs (USD)</h4>
          <p>{getNum(coinData.volumeUsd24Hr)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>Price (USD)</h4>
          <p>{getNum(coinData.priceUsd)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>Change Percentage</h4>
          <p>{getNum(coinData.changePercent24Hr)}</p>
        </div>
        <div className="coin--info-detail">
          <h4>V-Wap 24hrs</h4>
          <p>{getNum(coinData.vwap24Hr)}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
