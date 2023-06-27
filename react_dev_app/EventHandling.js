function App (){
    const [count, setCount] = usestate(0);
// React uses synthetic events to handle events
    const handleChangeCount = (e) => {
        console.log(e)
        setCount((currCount) => currCount + 1)
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