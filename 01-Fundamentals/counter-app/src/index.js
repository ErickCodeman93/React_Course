import React from 'react';
import ReactDOM from 'react-dom';
// import PrimerAppComponent from './PrimerAppComponent';
import CounterAppComponent from './CounterAppComponent';
import './index.css' ;


const divApp = document.querySelector( '#app' );
// const text = "Hola soy goku"

// ReactDOM.render( <PrimerAppComponent 
// 					saludo = { text }
// 				/>, 
// 				divApp );

ReactDOM.render( <CounterAppComponent value = { 11 }/>, divApp );

