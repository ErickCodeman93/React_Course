import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesopesado';
import { useCounter } from '../../hooks/useCounter'

export const MemorHook = () => {

	const { counter, increment } = useCounter( 100 );
	const [show, setShow] = useState(true);
	const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ] );

	return (
		<>	
			<h1>Memo Hook</h1>
			<h3>Counter: <small>{ counter }</small></h3>
			<hr />

			<p>{ memoProcesoPesado }</p>

			<button 
				className="btn btn-primary" 
				onClick={ () => increment() }>
				+{ counter } 
			</button>

			<button
				className="btn btn-outline-primary"
				onClick={ () => setShow( ! show ) }
			>
				Show/Hide { JSON.stringify( show ) }
			</button>

		</>
	)
}
