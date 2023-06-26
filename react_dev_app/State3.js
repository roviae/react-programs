function App(){
    //This will preserve the state value over multiple function calls
    // The dafault value can be of any type
    //use of object as default state value
    //possible to use fucntions in the default position
    const [state, setState] = useState({count: 0, description: "my description"})

    function handleChangeCount(){
        // Ensures count used is the most up to date
        setCount((count) => count + 1)
        
    }
}

return (
    <main style={mainStyles}>
        <h1>{count}</h1>
        <button onClick={handleChangeCount}>
            Change Count
        </button>
    </main>
)

export default App;