import React, { useRef } from 'react'

export const FocusScreen = () => {

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
}
