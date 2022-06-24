import PropTypes from "prop-types"
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [ counter,setCounter ] = useState( value )

  const handleAdd = () => {
    //Forma una de cambiar el state
    setCounter( counter + 1 );
  }

  const handleSubstract = () => {
    //Forma 2 de cambiar el state 
    if( counter > 1 ) {
      setCounter( (c) => c - 1);
    }
  }

  const handleReset = () => {
      setCounter( value );
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>
        +1
      </button>
  
      <button onClick={ ( event ) => handleSubstract() }>
        -1
      </button>
      <button onClick={ handleReset }>
        reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value : PropTypes.number.isRequired
}
