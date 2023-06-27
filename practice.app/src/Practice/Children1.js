function Children1() {
  return (
    <>
     <Person name='Joe' age={30}/>
     <Person name='Mary' age={40}/>
    </>
  
  );
}

function Person({name, age}) {
  return (
    <>
  <h1>{name}</h1>
  <p>{age}</p>
  </>
  )
}

export default Children1;