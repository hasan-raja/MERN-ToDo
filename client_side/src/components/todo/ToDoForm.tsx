import React from 'react';
import axios from 'axios';
import { Todo } from './ToDoList';

interface TodoFormProps{
    todos:Todo[],
    setTodos:(todos:Todo[])=>void;
}

const ToDoForm=( {todos,setTodos}:TodoFormProps)=>{
    const [title,setTitle]=React.useState("")
    const onsubmit=()=>{
        if(title.length>0){
            axios.post('todo',{title:title},{headers:{token:localStorage.getItem('token')}})
                .then(res=>{
                    if(res.status===200){
                        let todo=res.data.todo;
                        setTodos([...todos,todo])
                        setTitle("")
                    }
                })
        }
    }

    
    return(<div className="flex justify-between mb-8">
                <input className="w-full px-3 py-2 border border-secondary rounded-md mr-4" type="text" onChange={e=>setTitle(e.target.value)} value={title}/>
                <input type="button" className="px-5 py-2 bg-secondary text-fwhite rounded-md cursor-pointer" onClick={()=>onsubmit()} value="ADD"/>
            </div>
)}

export default ToDoForm;