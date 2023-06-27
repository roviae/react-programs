//UNCONTROLLED COMPONENET

function UncontrolledComponent(){
    const handleChange = (event) => {
        console.log(event)
    }

    return (
        <main>
            <div>
                <label htmlFor="fullName">
                    Full name
                </label>
                <input 
                onChange={handleChange}
                id='fullName'
                name='fullName'
                type='text'
                />
            </div>
        </main>
    )
}

export default UncontrolledComponent;