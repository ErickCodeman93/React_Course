import React, { useMemo } from 'react';
import {useParams, Redirect} from 'react-router-dom';
import { heroImages } from '../../helpers/heroesImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history}) => {

	 const { heroId } =  useParams();

	 const hero = useMemo(() =>getHeroById( heroId ), [ heroId ] );
	 
	if( !hero )
		return <Redirect to="/" />

	 const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters
	 } = hero;

	 const handleReturn = () => {

		if( history.length <= 2 )
			history.push('/');
		else
			history.goBack();
			
	 }

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img 
					// src={`../assets/heroes/${ heroId }.jpg`}
					src={ heroImages(`./${ heroId }.jpg`).default }
					className="img-thumbnail animate__animated animate__fadeInLeft"
					alt={superhero}
				/>
			</div> 
			<div className="col-8 animate__animated animate__fadeIn">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
					<li className="list-group-item"><b>Publisher:</b> {publisher}</li>
					<li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
				</ul>
				<br/>
				<h5>Characters</h5>
				<p >{ ( characters.split(',').filter( character => character !== alter_ego ).join(',')	) }</p>
				<button 
					className="btn btn-outline-info"
					onClick={ handleReturn }
				>
					Return
				</button>
			</div>
		</div>
	)
}
