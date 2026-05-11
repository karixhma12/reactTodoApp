

function TodoItem({key,todo, deleteTodo,toggleTodo}){
    return(
        <div style={{display:"flex"}}>
            <input type="checkbox" checked={todo.done} onChange={()=>toggleTodo(todo.id)}/>
            <div style={{textDecoration: todo.done ? "line-through" : "none"}}>
                {todo.text}
            </div>
            <button onClick={()=>deleteTodo(todo.id)}> Delete </button>
            <button> Edit </button>
        </div>
    )
}

export default TodoItem;