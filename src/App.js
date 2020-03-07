import React, { useState } from 'react';

import id from 'uuid/v4';

import Grudges from './components/Grudges';
import NewGrudge from './components/NewGrudge';

import initialState from '../public/initialState';

const App = () => {
  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = (grudge) => {
    grudge.id = id();
    grudge.forgiven = false;
    // Brandnew array containg newGrudge and copies of all the old ones
    setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = (id) => {
    setGrudges(
      grudges.map((grudge) => {
        if (grudge.id !== id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      })
    );
  };

  return (
    <div className='Application'>
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default App;
