import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

	const [ form, setForm ] = useState({
		name:'',
		email:''
	});

	const { name, email } = form;

	useEffect( () => {
		// console.log( 'Hey' );
		return () => {

		}

	}, [] );

	useEffect( () => {
		// console.log( 'Cambio Form state' );
	}, [form] );

	useEffect( () => {
		// console.log( 'Cambio email' );
	}, [email] );

	const handleInputChange = ( { target } ) => {

		setForm({
			...form,
			[ target.name ]: target.value
		})
	} //end function

	return (
		<>
			<h1>useEffect</h1>	
			<hr />
			<div className="form-group">
				<input 
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={ name }
					onChange={ handleInputChange }
				/>
			</div>
			<br />
			<div className="form-group">
				<input 
					type="text"
					name="email"
					className="form-control"
					placeholder="Tu email"
					autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
				/>
			</div>
			<br />
			{
				name === '123' && <Message />
			}
		</>
	)
}
