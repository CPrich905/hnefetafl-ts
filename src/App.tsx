import React from 'react';
import GameBoard from './components/GameBoard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hnefetafl 2.0</h1>
        <p>This time with React and TypeScript</p>
      </header>
      <main>
        <GameBoard
          
        />
      </main>
    </div>
  );
}

export default App;
