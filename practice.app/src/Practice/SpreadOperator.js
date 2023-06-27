import { useState } from "react";

function UsespreadOperator(){
    const [state, setState] = useState({count: 0, description: "use of spread operator"})

    function handleChangeCount(){
        setState((prevState) => ({...prevState, count: 1}))
        setState((prevState) => ({...prevState, count: prevState.count + 1}))
    }

    return (
        <main>
            <h1>{state.count}</h1>
            <button onClick={handleChangeCount}>Change Count</button>
        </main>
    )
}
export default UsespreadOperator;