import React from 'react';
import axios from 'axios';

interface LoginProps{
    renderSignUp: ()=>void;
}

const Login=({renderSignUp}: LoginProps)=>{

    
    const [username,setUserName]=React.useState("");
    const [password,setPassword]=React.useState("");

    const onSubmit=()=>{
        axios.post('http://localhost:3001/login',{
            username:username,
            password:password
        }).then(res=>{
            //success auth
            if(res.status===200){
                const token=res.data.token;
                localStorage.setItem('token',token);

                window.location.href='/dashboard';
            }else{
                //do some extra validationn
            }
        })
    }

    return(
        <div style={{height:"300px"}} >
            
            <div className="mb-4 mt-60">
            <h1 className="text-black-282C40 font-bold text-4xl mb-4">Sign In</h1>
            <h2 className="text-primary text-xl mb-4">Welcome,<span className="text-secondary "style={{fontStyle:"italic"}}>we missed you~ </span></h2>
                <label >Employee ID</label>
                <input onChange={(e)=>{setUserName(e.target.value)}} className="w-full px-3 py-2 border border-secondary rounded-md" type='text' placeholder='Employee ID' />
            </div>
            <div className="mb-4">
                <label>Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} className="w-full px-3 py-2 border border-secondary rounded-md" type='password' placeholder='Password' />
            </div>
            <div className="flex justify-between items-center   ">
                <div >
                    <p>No account?<span className="text-secondary cursor-pointer" onClick={renderSignUp} >Signup</span></p>
                </div>
                {/* <div className="text-fred">forget password</div> */}
                <button className="px-10 py-3 rounded-lg bg-secondary text-fwhite " onClick={()=>onSubmit()}>Sign In</button>
            </div>
        </div>
    )
}

export default Login;