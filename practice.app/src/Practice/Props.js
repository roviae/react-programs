function Title(props){
    return (
        <main>
            <h1>{props.title}</h1>
            {props.children}
        </main>
    )
}

function Description({text}){
    return (
        <p>{text}</p>
    )
}

function TestingProps(){
    return (
        <Title title="YouTube Channel">
            <Description text="Testing how props work in relation to children props"/>
    </Title>
    )
}

export default TestingProps;