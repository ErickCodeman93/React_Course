# Memo - Método react
Es una función que va a regresar la forma memorizada de mi componente y **solo se va actualizar o renderizar si las propertys cambian** 

El problema se desarrolla cuando un elemento de la interfaz cambia su estado pero esto orilla a que todo la vista se renderiza y cabe la posibilidad de que un componente el cual no se necesite que se renderize y este realize peticiones http y pueda gastar el plan de datos de un cliente.

De esta manera con la función **memo** podemos controlar su renderización y como lo comentamos solo cuando sus props cambien y no tada la vista.

Ejemplo del código:
````
// Este componente se renderiza cuando el prop value cambie

export const Small = React.memo( ( { value } ) => {

		console.log( 'me volvi a llamar :(' );
		// http?

		return (
			<div>
				<small> { value } </small>
			</div>
		)
	}
)
````