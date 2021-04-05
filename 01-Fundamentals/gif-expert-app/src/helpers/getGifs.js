export const getGift = async ( category ) => {


	const  url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=zPh9XzLqUf5S5E761p1WE5jgRkF33Z3P`;
	const response = await fetch( url );
	const { data } = await response.json();

	const gift = data.map( img => {

		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}

	} );

	return gift;
} //end function