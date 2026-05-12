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
                    <div className="todo-item">
                        <input className="todo-item__checkbox" type="checkbox" checked={todo.done} onChange={()=>toggleTodo(todo.id)}/>
                        <span className="todo-item__text" style={{textDecoration: todo.done ? "line-through" : "none" }}>
                            {todo.text}
                        </span>
                        <button className="todo-item__btn todo-item__btn--delete" onClick={()=>deleteTodo(todo.id)}> Delete </button>
                        <button className="todo-item__btn todo-item__btn--edit" onClick={()=>{setIsEditing(true)}}> Edit </button>
                    </div>
                )
            }
        </div>
    )
  
}

export default TodoItem;