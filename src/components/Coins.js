import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import CoinItem from './CoinItem';
import '../styles/coinList.css';

function Coins(props) {
  const isLoading = useSelector((state) => state.coins.isLoading);
  const { assets } = props;
  return (
    <div className="home--container">
      <ul className="home--list-container">
        {
          isLoading
            ? 'Loading'
            : assets.map((coin) => <CoinItem key={coin.id} data={coin} />)
        }
      </ul>
    </div>
  );
}

Coins.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rank: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      priceUsd: PropTypes.string.isRequired,
      changePercent24Hr: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Coins;
