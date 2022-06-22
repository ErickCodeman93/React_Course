const getName = () => {
  return 'Erick'
} 

export const FirstApp = ( { title, subtitle } ) => {

  return (
    <>
      {/* <h1>{ getName() }</h1> */}
      {/* <h1>{ Array.from(Array(10).keys()) }</h1> */}
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h1>{ title }</h1>
      <p>{ subtitle + 1 }</p>
    </>
  )
} 
