import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' ;

import PrimerAppComponent from './PrimerAppComponent';

const divApp = document.querySelector( '#app' );
const text = "Hola soy goku"

ReactDOM.render( <PrimerAppComponent 
					saludo = { text }
				/>, 
				divApp );

