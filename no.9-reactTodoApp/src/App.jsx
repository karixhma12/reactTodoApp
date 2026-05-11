import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import {useState} from "react";

function App(){
  const [todos,setTodos] = useState([{id:1, text: "Buy milk", done:false},{id:2, text: "Study", done:false}]);
  function addTodo(text){
    const newTodo = {id:Date.now(), text:text, done:false};
    setTodos([...todos,newTodo]);
  }
  function deleteTodo(id){
    const newTodos = todos.filter((todo)=>{
      if(todo.id===id){
        return false;
      }
      else{
        return true;
      }
    })

    setTodos(newTodos);

  }
  return(
  <>
    <TodoList list={todos} deleteTodo={deleteTodo}/>
    <TodoInput addTodo={addTodo}/>
  </>
  )
}

export default App;