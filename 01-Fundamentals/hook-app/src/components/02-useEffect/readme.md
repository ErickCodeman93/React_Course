# useEffect
Es un hook que nos va a permitir ejecutar algun efecto secundario cuando algo succeda en nuestros componentes 

No podemos renderizar un hook de manera condicional

Use effect tiene una funcion interna que sirve de limpieza en caso de que el componente sea desmontado ( que ya no aparezca en la interfaz ) .

 ````
 useEffect( () => {
		
		const mouseMove = ( { x, y } ) => {
			const coors = {  x, y }
			setCoords( coors );
		} 

		window.addEventListener( 'mousemove', mouseMove );

		return () => {
			window.removeEventListener( 'mousemove', mouseMove );
		}
	}, [] );
 ````

 El return es la parte del useEffect que realiza esta dicha limpieza, y es muy importante ya que despues de desmontarlo puede seguir ejecutado código. 