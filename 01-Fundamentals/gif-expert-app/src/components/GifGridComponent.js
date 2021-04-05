import React from 'react'
import { useGiftFetch } from '../hooks/useGiftFetch'
import GiftGridItemComponent from './GiftGridItemComponent';

const GifGridComponent = ( { category } ) => {

	const { loading, data:imgs } = useGiftFetch( category );

	return (
		<>	
			<h3 className="animate__animated animate__fadeIn">{ category }</h3>

			{ loading && <p className="animate__animated animate__flash animate__slow">Cargando...</p> }

			<div className="card-grid">
				{ 
					imgs.map( img => ( 
						<GiftGridItemComponent 
							key={ img.id }
							{ ...img } 
						/>
					) ) 
				}
			</div>
		</>
	)
}

export default GifGridComponent
