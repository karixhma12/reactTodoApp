import { useState } from "react";


function TodoItem({todo, deleteTodo,toggleTodo,editTodo}){

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    return(
        <div>
            {isEditing ? (
                    <>
                        <input value={editText} type="text" onChange={e=>setEditText(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"){editTodo(todo.id,editText);setIsEditing(false);}}}></input>
                        <button onClick={()=>{editTodo(todo.id, editText) ; setIsEditing(false);}}> Save </button>
                        <button onClick={()=>setIsEditing(false)}> Cancel </button>
                    </>
                ) :
                (
                    <div style={{display:"flex"}}>
                        <input type="checkbox" checked={todo.done} onChange={()=>toggleTodo(todo.id)}/>
                        <div style={{textDecoration: todo.done ? "line-through" : "none"}}>
                            {todo.text}
                        </div>
                        <button onClick={()=>deleteTodo(todo.id)}> Delete </button>
                        <button onClick={()=>{setIsEditing(true)}}> Edit </button>
                    </div>
                )
            }
        </div>
    )
  
}

export default TodoItem;