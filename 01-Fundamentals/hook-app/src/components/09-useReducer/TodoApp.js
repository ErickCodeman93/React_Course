import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';

const init = () => {

	// return [{
	// 	id: new Date().getTime(),
	// 	desc: 'Aprender React',
	// 	done:false,
	// }];

	return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

	const [ { description }, handleInputChange, handleSumit, reset ] = useForm({
		description:'',
	});

	console.log( description );

	useEffect( () => {

		localStorage.setItem( 'todos', JSON.stringify( todos ) );

	}, [ todos ] );

    const handleSubmit = ( e ) => {
		e.preventDefault();

		if( description.trim().length <= 1 )
			return;

		const newTODO = {
			id: new Date().getTime(),
			desc: description,
			done:false,
		}

		const action = {
			type : 'add',
			payload : newTODO,
		}

		dispatch( action );
		reset();
	}

	const handleDelete = ( todoId ) => {
		
		const action = {
			type: 'delete',
			payload: todoId,
 		}

		 dispatch( action );
	}

	const handleToggle = ( todoId ) => {

	}

    return (
        <div>
            <h1>Todo App ( { todos.length } ) </h1>
            <hr/>
			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{
							todos.map( ( todo, i ) => (
								<li 
									key={ todo.id }
									className="list-group-item"
								>
									<p className="text-center">{ i +  1 }. { todo.desc }</p>
									<button
										className="btn btn-danger"
										onClick={ () => handleDelete( todo.id ) }
									>
										Borrar
									</button>
								</li>
							))
						}
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<form onSubmit={ handleSubmit }>
						<input
							type="text"
							name="description"
							className="form-control"
							placeholder="Aprender"
							autoComplete="off"
							value={ description }
							onChange={ handleInputChange }
						/>
						<div className="d-grid gap-2">
							<button
								type="submit"
								className="btn btn-outline-primary mt-2"
							>
								Agregar
							</button>
						</div>
					</form>
				</div>
			</div>
        </div>
    )
}
