# Use Ref ( Hook )
Este hook es para mantener una referencia mutable sin refrescar el dom.
Tambien sirve para hacer referencias html o se le puede dar seguimiento a valores.  

````
import { useRef } from 'react';

const inputRef = useRef();

const handleClick = () => {
	inputRef.current.select();
}

return (
		<>
			<h1>Focus Screen</h1>	
			<hr/>
			<input 
				ref={ inputRef } 
				type="text" 
				className="form-control" 
				placeholder="nombre"
			/>
			<button 
				className="btn btn-outline-primary mb-5"	
				onClick={ handleClick }
			>
				Focus
			</button>
		</>
	)

````

Mantiene una referencia al valor del componente sin mandar o no necesariamente una rederizacion.

## Uso en caso Reales

El hook se usa habitualmente para mantener la referencia de un componente montado en la vista
y se use como bandera para que no truene la aplicación ejemplo:

````
import { useRef } from 'react';

const isMounted = useRef( true );

/* 
	Se carga cuando se monta el componente por 
 	primera vez 
*/

useEffect(() => {

	return () => isMounted.current = false;
	
}, [] );

/*
	En este ejemplo sucede que si el componente esta montado permite hacer el cambio de estado cuando termina la petición
	en caso de que no este montado el componente no hace este cambio de estado y no manda un error en la vista a la hora de renderizar.
*/

	fetch( url )
		.then( resp => resp.json() )
		.then( data => {

			setTimeout( () => {

				if( isMounted.current )
					setState( {
						loading: false,
						error: null,
						data
					} );
				else
					console.log( 'SetState no se llamo' );

			}, 4000 );

		} );

````

Como nos dimos cuenta en el ejemplo anterior este hook no depende de si renderiza o no el componente, más sin en cambio guarda la referencia así mismo ( el componente que esta usando este hook ) de tal forma que si se desmonta el componente y este iba a ejecutar un función, este hook junto con una condición no permite el cambio de estado junto su renderización evitando problemas de crash en la vista.  