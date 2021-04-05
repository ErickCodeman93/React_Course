import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs";

export const useGiftFetch = ( category ) => {

	const [state, setState] = useState({
		data:[],
		loading:true,
	});

	useEffect( () => {	
		getGift( category )
			.then( ( response ) => { 				
				setState( {
					data: response,
					loading: false,
				} );
			} );
	}, [ category ] ); 

	return state;
}