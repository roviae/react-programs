import { useState } from "react";

function LearningStates(){
    const [count, setCount] = useState(0)

function handleChangeCount(){
    setCount(count + 1)
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

export default LearningStates;