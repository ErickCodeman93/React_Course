import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterAppComponent = ( { value } ) => {

	const [ counter, setCounter ] = useState( value );


	const handleAdd = () => setCounter( counter + 1 ); 

	const handleReset = () => setCounter( value ); 

	const handleSubstract = () => ( counter > 0 ) && setCounter( counter - 1 ); 	

	return (
		<>
			<h1>CounterApp</h1>
       		<h2> { counter } </h2>
			<br />
			<button onClick={ handleAdd }>+1</button>
			<button onClick={ handleReset }>Reset</button>
			<button onClick={ handleSubstract }>-1</button>
		</>
	);
}

CounterAppComponent.propTypes = {
	value: PropTypes.number
}

CounterAppComponent.defaultProps = {
	value: 5
}

export default CounterAppComponent;
