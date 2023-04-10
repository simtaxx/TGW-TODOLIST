import React from 'react';
import logo from './logo.svg';
import './App.css';
declare const window: any;

function App() {
  console.log(`Cette application utilise Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), et Electron (v${window.versions.electron()})`)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
