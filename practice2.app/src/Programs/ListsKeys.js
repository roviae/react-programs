

const programmingLanguages = [
    {language: 'Javascript', devs: 123456789},
    {language: 'Dart', devs: 45367},
    {language: 'Python', devs: 34356475},
    {language: 'Laravel', devs: 46578},
    {language: 'Assembly', devs: 4546758},
    {language: 'Java', devs: 485657}
];

// Component that will use the list of data

function ProgrammingLanguages({language, developers}){
    return (
        <>
        <h1>This programming language is: {language}</h1>
        <p>Current developers: {developers}</p>
        </>
    )
}

function ListsKeys(){
    // option A: Assign the mapped list to a variable and render the variable

    const languageComponents = programmingLanguages.map((data) => {
        //This could return any element, not only component
        return (
            <ProgrammingLanguages language={data.language}
                                developers={data.devs}

                                // Must add a key prop to outermost element i.e <div>
                                // They allow react to know which items have been
                                // changed/added/removed within the list
                                // Keys need to be unique, so don't use indexes
                                // Keys need to be unique among siblings
                                //not globally thorought your app
                                key={data.language}
                                />
        )
    })

    return (<main>
        {languageComponents}
    </main>)
}

export default ListsKeys;