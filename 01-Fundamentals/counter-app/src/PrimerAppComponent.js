import React from 'react';
import PropTypes from 'prop-types';

//Funcional Component
const PrimerAppComponent = ( { saludo, subtitulo } ) => {

	return ( 
		<>	
			<h1> { saludo } </h1>
			{/* <pre>{ JSON.stringify( props, null, 3 )}</pre>	 */}
			<p>Mi primera Aplicación.</p>
			<p>{ subtitulo }</p>	
		</>
	);
}


// PropTypes
PrimerAppComponent.propTypes = {
	saludo: PropTypes.string.isRequired
}

// Default Values
PrimerAppComponent.defaultProps = {
	subtitulo: ''
}

export default PrimerAppComponent