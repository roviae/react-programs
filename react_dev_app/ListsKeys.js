// Lets say you have a lists of data

const programmingLanguages = [
    {language: 'javascript', devs: 123029435},
    {language: 'python', devs: 25367},
    {language: 'Dart', devs: 5467},
    {language: 'Rust', devs: 3547},
    {language: 'Assembly', devs: 45637389},
    {language: 'Java', devs: 84356}
];

// Lets also say you have a component that will use your list of data

function ProgrammingLanguage({language, developers}){
    return (
        <>
        <h1>This programming language is: {language}</h1>
        <p>Current developers: {developers}</p>
        </>
    )
}

// And you want to render a programmingLanguage component
// for each item in your list within your app

function App(){
    //option A: assign the mapped list to a variable and render the variable
    const languageComponents = programmingLanguages.map((data) => {
        // This could return any element, not only component
        return (
            <ProgrammingLanguage
            language={data.language}
            developers={data.devs}
            //Must add a key prop to the outermost element i.e div element
            // They allow react to know which items have been changed/added/removed within the 
            // Keys need to be unique, so don't use
            // Keys need to be unique among siblings
            // not globally throughout your app
            key={data.language}
            />
        )
    })
}