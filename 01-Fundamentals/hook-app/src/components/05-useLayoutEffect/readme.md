# useLayoutEffect
Este hook funciona de la misma manera que **useEffect** pero este solo cuando todos los elementos de la vista se terminaron de cargar y de igual manera, este se activa cuando una dependencia cambia de estado e igual cuando se desmonta el mismo componente tiene una funcion de limpieza.

Ejemplo:
````
useLayoutEffect( () => {
		
		setBoxSize( pTag.current.getBoundingClientRect() );

}, [ quote ] );
````