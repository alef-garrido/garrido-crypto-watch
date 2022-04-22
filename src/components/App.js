import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { loadCoins } from '../store/slices/coins-dux';
import Home from './Home';
import Coin from './Coin';
import Banner from './Banner';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCoins());
  }, []);
  return (
    <div>
      <Banner />
      <div className="app--container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Coin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
