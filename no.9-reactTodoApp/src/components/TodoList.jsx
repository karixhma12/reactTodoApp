import TodoItem from "./TodoItem";

function TodoList({list}){
return(
   <> 
   {list.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} />)    
   })}
   </>
)
    
}

export default TodoList;