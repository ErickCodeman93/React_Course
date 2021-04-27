import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExampleRef = () => {

	const [ show, setShow ] = useState( false );

	return (
		<>
			<h1>Real Example Ref</h1>
			<br />	
			{ show && <MultipleCustomHook /> }
			<br />
			<button 
				className="btn btn-dark"
				onClick={ () => setShow( ! show )  }
			>
				show/Hide
			</button>
		</>
	)
}
