import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
	
	const { state, increment, decrement, reset } = useCounter(100);

	return (
		<>
			<h1>Counter with hook: { state }</h1>	
			<hr />

			<button className="btn btn-primary mr-3" onClick={ () => increment(2) }>+1</button>			
			<button className="btn btn-primary mr-3" onClick={ reset }>Reset</button>			
			<button className="btn btn-primary" onClick={ () => decrement(2) }>-1</button>
		</>
	)
}
