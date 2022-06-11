import React from 'react';
// import './App.css';

export function sayHello() {
  console.log('hi')
}
export function sayGoodbye() {
  console.log('goodbye')
}

export function App() {
  return (
    <div className="App">
      <header className="App-header">
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

