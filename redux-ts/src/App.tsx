import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
          <Main />
      </header>
    </div>
  );
}

export default App;
