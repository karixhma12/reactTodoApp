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

  function toggleTodo(id){
    const newTodo = todos.map((todo)=>{
      if(todo.id===id){
        return{...todo , done:!todo.done};
      }
      else{
        return todo;
      }
    })
    setTodos(newTodo);
  }


  return(
  <>
    <TodoList list={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    <TodoInput addTodo={addTodo}/>
  </>
  )
}

export default App;