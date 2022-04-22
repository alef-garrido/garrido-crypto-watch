import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import '../styles/coinItem.css';

function CoinItem(props) {
  const { data } = props;
  const toNumber = (i) => i * 1;
  return (
    <li className="coin--item">
      <div className="coin--btn">
        <Link to={`/${data.symbol}`}>
          <BsArrowRightCircle />
        </Link>
      </div>
      <p className="coin--head">{data.symbol}</p>
      <p className="coin--preview">{data.name.toUpperCase()}</p>
      <p className="coin--preview coin-percent">
        {
          (toNumber(data.changePercent24Hr)) > 0
            ? (
              <span>
                <TiArrowSortedUp style={{ color: 'aqua' }} />
                {
                `${(toNumber(data.changePercent24Hr)).toFixed(1)}`
                }
              </span>
            )
            : (
              <span>
                <TiArrowSortedDown style={{ color: 'red' }} />
                {`${(toNumber(data.changePercent24Hr)).toFixed(1)}`}
              </span>
            )
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
