import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategoryComponent = ( { setCategories, categories } ) => {

	const [ inputValue, setInputValue ] = useState('');

	const handleInputChange = ( e ) => {
		const value = e.target.value;
		setInputValue( value );
	}  //end function

	const handleSubmit = ( e ) => {
		e.preventDefault();

		const found = categories.find( ( category) => category.toLowerCase() === inputValue.toLowerCase() );

		if( found ) return;

		if( inputValue.trim().length > 2 ){
			//TODO: Hacer apunte sobre funciones que pasan como prop al componente
			// Y como la funcion del use state tiene por defecto su valor anterior en un callback
			setCategories( c => [ inputValue, ...c ] );	
			setInputValue('');
		} //end if


	} //end function

	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text" 
				value={ inputValue }
				onChange={ handleInputChange }
			/>
		</form>
	)
}

AddCategoryComponent.propTypes = {
	setCategories : PropTypes.func.isRequired
}

export default AddCategoryComponent
