import React from 'react';
import Navbar from '../components/Navbar';
import ToDoForm from '../components/todo/ToDoForm'

import axios from 'axios';
import ToDoList,{Todo} from "../components/todo/ToDoList"

const Dashboard=()=>{
    const [todoList,setTodoList]= React.useState<Todo[]>([])
    React.useEffect(()=>{
        axios.get('/todos',{headers:{token:localStorage.getItem('token')}})
            .then(res=>{
                if(res.status===200){
                    setTodoList(res.data.todos)
                }
            })
    },[])
    return(<>
        <Navbar/>
        <div className="max-w-md mx-auto pt-12">
            <h1 className="font-bold text-secondary text-center text-xl mb-12">My todoList</h1>
        <ToDoForm todos={todoList} setTodos={setTodoList}/>
        <ToDoList  todos={todoList} setTodos={setTodoList}/>
        </div>
        </>
    )
};

export default Dashboard;