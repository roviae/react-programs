function App(){
    //This will preserve the state value over multiple function calls
    // The dafault value can be of any type
    const [count, setCount] = useState(0)

    function handleChangeCount(){
        //Setting state based on previous state
        setCount(count + 1)
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