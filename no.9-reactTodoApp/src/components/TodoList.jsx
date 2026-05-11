import TodoItem from "./TodoItem";

function TodoList({list,deleteTodo}){
return(
   <> 
   {list.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)    
   })}
   </>
)
    
}

export default TodoList;