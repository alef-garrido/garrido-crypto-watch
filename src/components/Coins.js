import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCoins } from '../store/slices/coins-dux';

function Home() {
  // const coins = useSelector((state) => state.coins.list);
  // const status = useSelector((state) => state.coins.isloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCoins());
  }, []);
  return (
    <div className="home--container">
      <ul className="home--list-container">
        {
          // status
          //   ? 'loading'
          //   : coins.map((coin) => console.log(coin))
        }
      </ul>
    </div>
  );
}

export default Home;
