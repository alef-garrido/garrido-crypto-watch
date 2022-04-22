import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Coins from './Coins';
import Header from './Header';
import '../styles/home.css';

function Home() {
  const assets = useSelector((state) => state.coins.list);
  const [input, setInput] = useState({
    search: '',
  });
  const regXp = new RegExp(input.search, 'i');
  const searchQry = assets.filter((i) => regXp.test(i.name));
  const onChange = (e) => {
    setInput({
      ...input,
      search: e.target.value,
    });
  };
  return (
    <main>
      <div className="head--display">
        <Header
          searchInput={input.search}
          changeHandler={onChange}
          assets={assets}
        />
      </div>
      <div className="list--display">
        <Coins
          assets={searchQry}
        />
      </div>
    </main>
  );
}

export default Home;
