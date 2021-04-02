export interface Todo{
    _id:string,
    title:string,
    isCompleted:boolean
}

interface TodoListProps{
    todos:Todo[]
}

const ToDoList=({todos}:TodoListProps)=>{
    return(
        <>
    {
        todos.map((todo)=>(
            <div className="border border-primary p-4 rounded-md m-4 flex justify-between items-center" key={todo._id}>
                {todo.title}
                <input type="button" className="py-2 px-3 bg-secondary text-fwhite rounded-md cursor-pointer" value="DONE"/>
            </div>
        ))
    }
        </>
)
}

export default ToDoList;