

function TodoItem({key,todo, deleteTodo}){
    return(
        <div>
            {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}> Delete </button>
            <button> Edit </button>
        </div>
    )
}

export default TodoItem;