# Otros usos del useState

Cuando el useState use un tipo de dato como el objeto y poder cambiar el estado de este objeto la siguiente manera es la mejor :

````
//Declaracion del estado
const [ state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 10,
		counter4: 20,
		counter5: 10,
		counter6: 20,
});

//Desestructuración
const { counter1, counter2 } = state;

//Cambio de estado sin modificar las propiedades del objeto

setState( { 
	...state,
	counter1: counter1 + 1,
} );
````
Usamos el operdor spread para evitar escribir de nuevo todo el objeto al querer cambiar de estado como en el ejemplo anterior y solo modificamos la propiedad deseada.

# Profundizando en los customHook

Un custom hook busca reutilizar código, reutilizando y centralizando la lógica.
Un custom Hook no es más que un simple función que tiene otros hooks.

Ejemplo:

````
import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
	
	const [ state, setstate ] = useState( initialState );

	const increment = ( factor = 1 ) => {
		setstate( state + factor );
	}

	const decrement = ( factor = 1 ) => {
		setstate( state - factor );
	}

	const reset = () => {
		setstate( initialState );
	} 

	return {
		state,
		increment,
		decrement,
		reset
	};
}

````

Este custom hook de nombre useCounter retorna estados y funciones apartir de un estado, también se puede retornar en forma de objetos, pero como queremos las propiedades de forma específica lo devolvemos de forma de un objeto.

Tamnbien como se puede observar tiene un valor por defecto en su valor inicial de este custom hook.

Este custom hook lo podemos reutilizar en infinidad de partes de nuestra aplicación