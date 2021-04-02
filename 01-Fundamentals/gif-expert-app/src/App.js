import React, { useState } from 'react'
import AddCategoryComponent from './components/AddCategoryComponent'

const App = () => {

	const [ categories, setCategories ] = useState( [ 'Dragon Ball', 'Pokemon', 'Transformers' ] )

	// const handleAdd = () => {

	// 	const name = 'Mounstros';
	// 	setCategories( [ ...categories, name ] );

	// } //end funtion

	return (
		<>
			<h2>Gif Expert App</h2>
			<AddCategoryComponent
				setCategories={ setCategories }
				categories={ categories }
			/>
			<hr />
			<ol>
				{
					categories.map( ( category ) => <li key={ category }>{ category }</li> )
				}	
			</ol>
		</>
	)
}

export default App
