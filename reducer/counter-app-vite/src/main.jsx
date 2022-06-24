import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
// import { HelloWordApp } from './HelloWordApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola soy Bixler" subtitle={123} /> */}
    <CounterApp value={ 20 }/>
  </React.StrictMode>
)