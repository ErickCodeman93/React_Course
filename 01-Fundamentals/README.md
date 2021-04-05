# __Conceptos Generales__

## Componente :
```
Pequeña pieza de código encapsulada re-utilizable que puede tener estado o no.
``` 

## Estado :
```
Es como se encuentra la información del componente en un punto determinado del tiempo.
```
## Props
````
Son propiedades que se envían a los componentes:
````


## Llaves dentro de una etiqueta
Se puede poner cualquier expresión de JS que retorne un valor, pero no cualquier valor como :
- Booleanos
- Los Arreglos los itera
- Objetos
- Undefined

Ejemplo:

````
<h1>{ variable }</h1>
```` 

## Tipos de propiedad ( PropTypes )
Son los tipos de propiedades que tiene que recibir o debería recibir un componente. 
Ejemplo:

````
import React from 'react';
import PropTypes from 'prop-types';

Component = ( { saludo } ) => {
	// Code
}

Component.propTypes = {
	// Validando el tipo de dato
	saludo: PropTypes.string
	// Validando que sea requerido
	saludo: PropTypes.string.isRequired
}

````

## Valores por defecto en las props
Esta forma es más presentable que ponerlo directamente en las props que recibe el componente:

````
import React from 'react';

Component = ( { saludo, subtitulo } ) => {
	// Code
}

Component.defaultProps = {
	subtitulo: 'Soy un subtítulo'
}

export default Component;
````
En vez de:

````
import React from 'react'

Component = ( { saludo, subtitulo = 'Soy un subtítulo' } ) => {
	// Code
}

export default Component;
````

## Eventos Click 

Los eventos que tiene javaScript como click, React tiene los propios con el mismo nombre y estos la documentación los llama sintéticos:
````
<button onClick="">+1</button>
````
El tema aquí es que hay varias formas de hacer funcionar estos eventos que son directos de React.

Este primer caso es el más largo ya que se manda a llamar directamente la función con una expresión de javaScript:

Nota: Todos los eventos de React tienen como parámetro default "e" ya que es el contiene funciones, propiedades y valores del mismo evento

````
<button onClick={ ( e ) => { console.log( e ) } }>+1</button>
````
El segundo caso es mandando a llamar una funcion externa:
````
const handleadd = ( e ) => {
	// Code
}
return (
		<>
			<button onClick={ ( e ) => handleAdd( e ) }>+1</button>
		</>
);
````
El tercer caso es el más sencillo debido a que se infiere el parámetro "e"  dentro de una función externa cuando tiene un solo parámetro como en el siguiente código:
````
<button onClick={ handleAdd }>+1</button>
````
__Mucho cuidado con esta expresión__
````
<button onClick={ handleAdd() }>+1</button>
````
Ya que cuando se renderiza la vista, ejecutará la función debido a que se está llamando a ejecutar y no se manda como referencia.

Y puede que haya el caso que quieras ejecutar una función cuando se renderiza el componente o pasar más parámetros.

Puedes usar los siguientes casos para resolverlos:

Caso1 -> Llamar la función externa dentro de una función anónima dentro de la expresión de javaScript y en esa misma función anónima, pasar los parametros que necesita la función externa como se ve en el siguiente código:
````
<button onClick={ ( e, val, val2 ) => handleAdd( e, val, val2 ) }>+1</button>
````
Caso2 -> Y el que yo recomiendo, es que pases la función como propiedad en un componente y este lo uses dentro del funcional component que corresponde a ese componente y puedes pasar propiedades en el mismo componente para que las use la función que también pasaste como propiedad.

Ejemplo:

````
import React from 'react';

const MyComponente = ( { myFunction, val, val2 } ) =>{

	myFunction( val, val2 );
}

export defult MyComponent;

====================================

import React from 'react';

const handleAdd = ( val, val2 ) => {
	// Code
} 

<MyComponent 
	myFunction={ handleAdd } 
	val={1234}
	val2={1234}/>

````

## ¿Qué es un hook? ( useState )

No es más que una función.

Es una función que recibe un valor y retorna un arreglo, cuya primera posicion es el mismo valor que se envia y el segundo argumento es una función que establece el valor al primer argumento que retorna:

````
const useState = ( valor ) => {
	return [ valor, () => { console.log( valor ) } ];
}
````

Para usarlo se desestructura con un arreglo de la siguente manera:
````
const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();

````

Nota: No se puede mutar el valor de una constante por eso se usa el SetNombre para cambiar el valor y renderizar donde se este usando ese valor.

Una forma de cambiar el valor de un state es de la siguiente manera:

````
setCounter( ( c ) => c + 1 );
````

En caso de que no se pudiera de la forma habitual

````
setCounter( c + 1 );
````

## useEffect

Este hook sive para ejecutar cierto código de forma condicional, en este caso se muestra que ejecutara la función getGift la primera vez que se renderiza el componente que lo contiene y no una segunda vez que se renderize. 

````
useEffect( () => {		
	getGift();
}, [] ); 	
````

Cabe mencionar que useEffect se pone en marcha cuando el componente padre se actualiza el estado y no cuando el componente que contiene useEffect actualiza su estado.

__Nota:__ si una función que esta dentro del useEffect tiene parametros, estas deben ser importadas en el arreglo del segundo parametro del useEffect

 ````
useEffect( () => {		
	getGift( category ).then( r => setCount( r ) );
}, [ category ] ); 	
````

## Custom Hook

Es una forma de extraer lógica de algún componente o lógica que quiero reutilizar y extaerla de tal manera que sea sencillo extraerla.

__Nota:__ Es una función cualquiera.

````
export const useGiftFetch = ( category ) => {

	const [state, setState] = useState({
		data:[],
		loading:true,
	});

	useEffect( () => {	
		getGift( category )
			.then( ( response ) => { 				
				setTimeout( () => {
					
					setState( {
						data: response,
						loading: false,
					} );
				}, 3000 );
			});
	}, [ category ] ); 

	return state;
}
````
Una cosa interesantes de los custom hook son que dentro de ellos se pueden usar sin problema otros hooks( como useState o useEffect ) y de alguna manera heredan el estado del componente actual y este se renderiza cada que cambia el estado dentro del custom hook.


# __::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::__


# __Comandos__

## Crear un proyecto en React
````
~ > npx create-react-app < name-app >
````

## Iniciar el proyecto
````
~ > npm start
````
##  Importar un funcional components con proptypes
````
rafcp_
````

##  Importar por default un funcional components
````
rafce_
````

