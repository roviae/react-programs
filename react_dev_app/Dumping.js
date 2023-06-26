function Person(props){
    return (
        <>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        </>
    )
}


function App(){
    return (
        <>
        <Person name="Joe" age={30}/>
        <Person name="Laura" age={40}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);