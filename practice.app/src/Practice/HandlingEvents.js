import { useState } from "react";

function HandlingEvents(){
    const [count, setCount] = useState(0);

    const handleChangeCount = (e) => {
        console.log(e)
        setCount((currcount) => currcount + 1)
    }
    return (
        <main>
            <h1>{count}</h1>
            <button onClick={handleChangeCount}>
                Change Count
            </button>
        </main>
    )
}

export default HandlingEvents;