import React from 'react';

import Grudges from './components/Grudges';
import NewGrudge from './components/NewGrudge';

const App = () => {
  return (
    <div className='Application'>
      <NewGrudge />
      <Grudges />
    </div>
  );
};

export default App;
