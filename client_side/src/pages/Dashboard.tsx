import React from 'react';
import Navbar from '../components/Navbar';

//import axios from 'axios';

interface Todo{
    title:string,
    isCompleted:boolean
}

const todoList:Todo[]=[
    {
        title:"todo 1",
        isCompleted:false
    },
    {
        title:"todo 2",
        isCompleted:false
    },
    {
        title:"todo 3",
        isCompleted:false
    },
    {
        title:"todo 4",
        isCompleted:false
    },
]

const Dashboard=()=>{
    // React.useEffect(()=>{
    //     axios.get('/api',{headers:{token:localStorage.getItem('token')}})
    //         .then(res=>console.log(res))
    // },[])
    return(<>
        <Navbar/>
        <div className="max-w-md mx-auto pt-12">
            <h1 className="font-bold text-secondary text-center text-xl mb-12">My todoList</h1>
            <div className="flex justify-between mb-8">
                <input className="w-full px-3 py-2 border border-secondary rounded-md mr-4" type="text"/>
                <input type="button" className="px-5 py-2 bg-secondary text-fwhite rounded-md cursor-pointer" value="ADD"/>
            </div>
            {
                todoList.map(todo=>(
                    <div className="border border-primary p-4 rounded-md m-4 flex justify-between items-center">
                        {todo.title}
                        <input type="button" className="py-2 px-3 bg-secondary text-fwhite rounded-md cursor-pointer" value="DONE"/>
                    </div>
                ))
            }
        </div>
        </>
    )
};

export default Dashboard;