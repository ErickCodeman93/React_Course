import { heroes } from '../data/data';

export const getHeroesByPublisher = ( publisher ) => {

	const validPublisher = [ 'DC Comics', 'Marvel Comics' ];
	
	if( !validPublisher.includes( publisher ) )
		throw new Error(`Publisher "${publisher}" no es correcto `);
	
	return heroes.filter( hero => hero.publisher === publisher );
}