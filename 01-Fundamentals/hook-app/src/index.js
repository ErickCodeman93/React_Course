import React from 'react';
import ReactDOM from 'react-dom';
import { CallBackHook } from './components/08-callBackHook/CallBackHook';
// import { MemorHook } from './components/07-memoHook/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { App } from './App';
// import { CounterApp } from './components/01-useState/CounterApp';
import './index.css';

const app = document.getElementById('app');

ReactDOM.render( <CallBackHook />, app );

