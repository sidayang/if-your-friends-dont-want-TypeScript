import React from 'react';
import logo from './logo.svg';
import {TSXComponent} from './components/tsx-component'
import {JSXComponent} from './components/jsx-component'
import {Text} from './components/js-file/text'
import './App.css';

function App() {
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
      <TSXComponent content={Text.tsxLabel} />
      <JSXComponent />
      </header>
    </div>
  );
}

export default App;
