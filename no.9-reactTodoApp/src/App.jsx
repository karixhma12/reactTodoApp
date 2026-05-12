import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import {useState, useEffect} from "react";

function App(){

  const [todos,setTodos] = useState(()=>{
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  })

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

  function editTodo(id, text){
      const newTodo = todos.map(todo=>{
          if(id===todo.id){
            return {...todo, text: text};
          }
          else{
            return todo;
          }
      })
      setTodos(newTodo);
  }

  //save to LocalStorage 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return(
  <div className="app">
    <h1 className="app-title">My Todo App </h1>
    <TodoList list={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    <TodoInput addTodo={addTodo}/>
  </div>
  )
}

export default App;