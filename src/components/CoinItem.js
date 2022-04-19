import React from 'react';
import { PropTypes } from 'prop-types';

function CoinItem(props) {
  const { data } = props;
  return (
    <li>
      <p>{data.id}</p>
      <p>{data.symbol}</p>
    </li>
  );
}

CoinItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoinItem;
