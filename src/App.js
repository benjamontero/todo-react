import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from  './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>todo react</p>
        <input type = 'text'/>
        <button>GUARDAR</button>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
