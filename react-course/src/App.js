import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
     <h1>My Todo List</h1>  
     <Todo text='Learn React'/>
     <Todo text='Master React'/>
     <Todo text='Explore Full React Course'/>
     
      </div>
     
  );
}

export default App;
