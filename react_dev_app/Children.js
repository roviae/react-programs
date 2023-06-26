function TitleAndDescription(){
  return (
  <main>
  <h1>{props.title}</h1>
    {props.children}
</main>
)
}

function App(){
  return (
  <TitleAndDescription title="Youtube Channel">
    Hi, I'm Lydiah and i don't have a Youtube Channel.
    Thanks for asking out, we promise to consider it.
    </TitleAndDescription>
    )
}

const root = ReactDOM.createRoot(Document.getElementById('root'));

root.render(<App />);