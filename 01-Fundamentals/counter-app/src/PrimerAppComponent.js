import React from 'react';

//Funcional Component
const PrimerAppComponent = ( { saludo = 'Hola mundo' } ) => {

	return ( 
		<>	
			<h1> { saludo } </h1>
			{/* <pre>{ JSON.stringify( props, null, 3 )}</pre>	 */}
			<p>Mi primera Aplicación.</p>	
		</>
	);
};

export default PrimerAppComponent