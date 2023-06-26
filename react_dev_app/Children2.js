function Title(props){
    return (
        <main>
            <h1>{props.title}</h1>
            {props.children}
        </main>
    )
}

function Description({text}){
    return(<p>{text}</p>)
}

function App(){
    return (
        <Title title="Youtube Channel">
            <Description text="This is Kiage again with the boring practice sessions"></Description>
        </Title>
    )
}

const root = ReactDOM.reactRoot(Document.getElementById("root"));
root.render(<App />);