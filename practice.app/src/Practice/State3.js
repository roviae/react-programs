import { useState } from "react";

function CheckingAutoMerge(){

    const [state, setState] = useState({count: 0, description: "my description"})

function handleChangeCount(){
    setState((count) => count + 1)
    }
return (
    <main>
        <h1>{state.count}</h1>
        <button onClick={handleChangeCount}>
            Change count
        </button>
    </main>
)
}
export default CheckingAutoMerge;
//not working as expected