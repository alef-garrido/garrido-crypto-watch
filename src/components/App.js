import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCoins } from '../store/slices/coins-dux';
import Home from './Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCoins());
  }, []);
  return (
    <main className="app--container">
      <div>
        <Home />
      </div>
    </main>
  );
}

export default App;
