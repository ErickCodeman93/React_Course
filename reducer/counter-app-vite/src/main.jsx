import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css'
// import { HelloWordApp } from './HelloWordApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <FirstApp title="Hola soy Bixler" subtitle={123} />
  </React.StrictMode>
)