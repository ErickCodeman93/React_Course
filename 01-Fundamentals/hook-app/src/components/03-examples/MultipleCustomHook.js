import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

export const MultipleCustomHook = () => {

	const { state:counter, increment } = useCounter( 1 );

	const { data,loading } = useFecth( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
	
	const { author, quote } = !! data && data[0];
	
	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{
				loading
				?
					( 
						<div className="alert alert-info text-center">
							Loading ...
						</div>
					)
				:
					(
						<blockquote className="blockquote text-end">
							<p>{ quote }</p>
							<footer className="blockquote-footer">{ author }</footer>
						</blockquote>
					)
			}

			<button className="btn btn-primary" onClick={ () => increment(1) }>
				Siguiente Quote
			</button>

		</>
	)
}
