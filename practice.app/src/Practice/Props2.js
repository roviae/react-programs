function TestingChildrenProps(){
    return (
        
        <CheckingChildren title="YouTube Channel">
            This is my Youtube channel.
            Subscribe, like and share to support us to make more interesting content
        </CheckingChildren>
            )
}

function CheckingChildren({title, children}){
    return (
        <>
        <h1>{title}</h1>
            {children}
        </>
    )
}

export default TestingChildrenProps;