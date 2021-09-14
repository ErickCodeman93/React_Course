import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {

	const location = useLocation();
	const { q = '' } = queryString.parse( location.search );

	const [ values ,handleInputChange ] = useForm({ searchText : q });

	const { searchText } = values;

	const heroesfiltered = useMemo(() => getHeroesByName( q ), [q]);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${ searchText }`);
	}

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<form onSubmit={handleSubmit}>
						<input 
							type="text"
							placeholder="Find your hero"
							className="form-control"
							name="searchText"
							value={ searchText }
							onChange={ handleInputChange }
							autoComplete='off'
						/>
						<button 
							type="submit"
							className="btn btn-block btn-outline-primary mt-3"
						>
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{
						( q === '' )
							&&
							<div className="alert alert-info">
								Search a hero
							</div>
					}

					{
						( q !== '' && heroesfiltered.length === 0 )
							&&
							<div className="alert alert-danger">
								There is no a here with { q }
							</div>
					}

					{
						heroesfiltered.map( hero => (
							<HeroCard 
								key={ hero.id }
								{ ...hero }
							/>) )
					}
				</div>
			</div>
		</div>		
	)
}
