import React, { useState } from 'react'
import AddCategoryComponent from './components/AddCategoryComponent'
import GifGridComponent from './components/GifGridComponent'

const App = () => {

	const [ categories, setCategories ] = useState( [ 'Dragon Ball' ] )

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
					categories.map( ( category ) => ( 
						<GifGridComponent 
							key={ category } 
							category={ category } 
						/> 
					) )
				}	
			</ol>
		</>
	)
}

export default App
