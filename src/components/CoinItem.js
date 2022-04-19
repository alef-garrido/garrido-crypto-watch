import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/coin.css';

function CoinItem(props) {
  const { data } = props;
  const toNumber = (i) => i * 1;
  return (
    <li className="coin--item">
      <p className="coin--head">{data.symbol}</p>
      <p className="coin--preview">{data.name.toUpperCase()}</p>
      <p className="coin--preview coin-percent">
        {
          (toNumber(data.changePercent24Hr)) > 0
            ? `+${(toNumber(data.changePercent24Hr)).toFixed(1)}`
            : `${(toNumber(data.changePercent24Hr)).toFixed(1)}`
        }
      </p>
      <p className="coin--preview coin-value">{`${(toNumber(data.priceUsd)).toFixed(3)} USD`}</p>
    </li>
  );
}

CoinItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoinItem;
