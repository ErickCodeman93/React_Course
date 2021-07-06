# ¿Que es un reducer?

1 Es una funcion común y corriente.

2 Debe ser una funcion que se resuelva de manera interna y no debe realizar tareas asíncronas, ademas que no debe llamar local storage o sessionStorage.

3 Debe retornar un nuevo estado.

4 Usualmente  sólo recibe dos argumentos:
* El valor inicial 
* La acción a ejecutar

````
const todoReducer = () => {


}
````

````
const initialTodos = [{
    iud: 1,
    todo:'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialTodos, action  ) => {
    return state
}

let todo = todoReducer();

console.log( todo );
````

# ¿Para qué es todo esto?

Es tener controlado en un solo lugar todas las acciones que modifican mi state o mi estado de la aplicación y ver a nivel general todas las posibles modificaciones que nuestra aplicación tiene o puede realizar.

 

