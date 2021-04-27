import React from 'react';
import ReactDOM from 'react-dom';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { App } from './App';
// import { CounterApp } from './components/01-useState/CounterApp';
import './index.css';

const app = document.getElementById('app');

ReactDOM.render( <RealExampleRef />, app );

