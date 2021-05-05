# UseMemo ( Hook )

Este hook su función es memorizar valores si los argumentos son iguales, pero si cambian hay que reprocesarlo o actualizarlo.

EL hook **useMemo** recibe un callback y unas dependencias. 

Si algo cambia en las dependecias memoriza el nuevo resultado.

Ejemplo:

````
const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ] );


	return (
		<>	
			<h1>Memo Hook</h1>
			<h3>Counter: <small>{ counter }</small></h3>
			<hr />

			<p>{ memoProcesoPesado }</p>
````

El siguienete código muestra como se pasa una función que va a generar el nuevo estado a memorizar y este se va actualizar o memorizar cuando la dependencia cambie y se almacena en **memoProcesadoPesado** y se coloca en la vista.