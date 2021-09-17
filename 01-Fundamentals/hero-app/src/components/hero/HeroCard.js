import React from 'react';
import {Link} from 'react-router-dom';
import { heroImages } from '../../helpers/heroesImages';

export const HeroCard = ({ 
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters
}) => {
	return (
		<div className="card col-3 m-2" style={ {width: '18rem'}}>
			{/* <img src={`./assets/heroes/${ id }.jpg`} className="card-img-top" alt={ superhero } /> */}
			<img src={ heroImages( `./${ id }.jpg` ).default } className="card-img-top" alt={ superhero } />
			<div className="card-body">
				<h5 className="card-title">{ superhero }</h5>
				<p className="card-text">{ alter_ego }</p>
				<p className="card-text">{ ( characters.split(',').filter( character => character !== alter_ego ).join(',')	) }</p>
				<p className="card-text">
					<small className="text-muted">{ first_appearance }</small>
				</p>
				<Link to={`/hero/${id}`} className="btn btn-primary">Más ...</Link>
			</div>
	  </div>
	)
}
