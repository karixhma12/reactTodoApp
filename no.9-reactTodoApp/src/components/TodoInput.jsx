import {useState} from "react";

function TodoInput({addTodo}){
    const [todoText,setTodoText] = useState("");
    return(
        <div className="todo-input">
            <input className="todo-input__field" value={todoText} type="text" placeholder="enter your todo..." onChange={e=>{setTodoText(e.target.value)}} onKeyDown={e=>{if(e.key==="Enter"){addTodo(todoText);setTodoText("");}}}></input>
            <button className="todo-input__btn" onClick={()=>{addTodo(todoText);setTodoText("");}}>Add Todo</button>
        </div>
    )
}

export default TodoInput;