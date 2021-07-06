import { useState } from "react"

export const useForm = ( initialState ) => {
	
	const [ values, setValues ] = useState( initialState );

	const reset = () => {

		setValues( initialState );
	}

	const handleInputChange = ( { target } ) => {
		setValues({
			...values,
			[ target.name ]: target.value
		})
	} //end function

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log( values );
	} //end function

	return [
		values,
		handleInputChange,
		handleSubmit,
		reset
	];
}
