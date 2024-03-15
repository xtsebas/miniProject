import React from 'react';
import Name from './components/Name';
import AnimatedName from './components/AnimatedName';

const App = () => {
  return (
    <div>
      <h1>Componente "Name":</h1>
      <Name text="Sebastian" />
      <h1>Componente "AnimatedName":</h1>
      <AnimatedName text="Sebastian" />
    </div>
  );
};

export default App;
