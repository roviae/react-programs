import { useState } from "react"

function UptoDateState(){

    const [count, setCount] = useState(0)

    function handleChangeCount(){
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }

    return (
        <main>
            <h1>{count}</h1>
            <button onClick={handleChangeCount}>
                Change count
            </button>
        </main>
    )
}

export default UptoDateState;