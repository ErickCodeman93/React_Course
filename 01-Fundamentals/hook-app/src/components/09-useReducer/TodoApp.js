import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './Components/TodoList';
import { TodoAdd } from './Components/TodoAdd';
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

	useEffect( () => {

		localStorage.setItem( 'todos', JSON.stringify( todos ) );

	}, [ todos ] );

	const handleAddTodo = ( newTODO ) => {

		dispatch( {
			type : 'add',
			payload : newTODO,
		} );

	}

	const handleDelete = ( todoId ) => {
		
		const action = {
			type: 'delete',
			payload: todoId,
 		}

		 dispatch( action );
	}

	const handleToggle = ( todoId ) => {

		dispatch({
			type: "toggle",
			payload: todoId,
		});
	}

    return (
        <div>
            <h1>Todo App ( { todos.length } ) </h1>
            <hr/>
			<div className="row">
				<div className="col-7">
					<TodoList 
						todos={ todos }
						handleDelete={ handleDelete }
						handleToggle={ handleToggle }
					/>
				</div>
				<div className="col-5">
					<TodoAdd 
						handleAddTodo={handleAddTodo}
					/>
				</div>
			</div>
        </div>
    )
}
