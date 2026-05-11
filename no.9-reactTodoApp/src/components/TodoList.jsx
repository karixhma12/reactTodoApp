import TodoItem from "./TodoItem";

function TodoList({list,deleteTodo,toggleTodo}){
return(
   <> 
   {list.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)    
   })}
   </>
)
    
}

export default TodoList;