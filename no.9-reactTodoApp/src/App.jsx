import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App(){
  return(
    <>
      <h1> My Todo App </h1>
      <TodoInput/>
      <TodoItem/>
      <TodoList/>
    </>  
  )
}

export default App;