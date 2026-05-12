import TodoItem from "./TodoItem";

function TodoList({list,deleteTodo,toggleTodo,editTodo}){
return(
   <div className="todo-list"> 
   {list.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />)    
   })}
   </div>
)
    
}

export default TodoList;