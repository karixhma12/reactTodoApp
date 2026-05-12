import TodoItem from "./TodoItem";

function TodoList({list,deleteTodo,toggleTodo,editTodo}){
return(
   <> 
   {list.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />)    
   })}
   </>
)
    
}

export default TodoList;