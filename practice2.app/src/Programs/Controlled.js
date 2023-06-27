//Controlled input

import { useState } from "react";

function ControlledComponents(){
    const [fullName, setFullName] = useState('')

    const handleChange = (event) => {
    setFullName(event.target.value)
    }

    return (
        <main>
            <div>
                <label htmlFor='fullName'>Full Name</label>
                <input 
                value={fullName}
                onChange={handleChange}
                id='fullName'
                name="fullname"
                type="text"
                />
            </div>
        </main>
    )
}

export default ControlledComponents;