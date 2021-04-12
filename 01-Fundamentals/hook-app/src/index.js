import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { App } from './App';
// import { CounterApp } from './components/01-useState/CounterApp';
import './index.css';

const app = document.getElementById('app');

ReactDOM.render( <CounterWithCustomHook />, app );

