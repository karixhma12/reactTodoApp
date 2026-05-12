import {useState} from "react";

function TodoInput({addTodo}){
    const [todoText,setTodoText] = useState("");
    return(
        <div>
            <input value={todoText} type="text" placeholder="enter your todo..." onChange={e=>{setTodoText(e.target.value)}} onKeyDown={e=>{if(e.key==="Enter"){addTodo(todoText);setTodoText("");}}}></input>
            <button onClick={()=>{addTodo(todoText);setTodoText("");}}>Add Todo</button>
        </div>
    )
}

export default TodoInput;