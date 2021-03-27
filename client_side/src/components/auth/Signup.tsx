import React from 'react';

interface SignUpProps{
    renderLogin: ()=>void;
}

const Signup=({renderLogin}:SignUpProps)=>{

    const [username,setUserName]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [confirmPassword,setConfirmPassword]=React.useState("")
    const [disable,setDisable]=React.useState(false)

    React.useEffect(()=>{
        if(password===confirmPassword) setDisable(false)
        else setDisable(true)
    },[password,confirmPassword])

    return(
        <div style={{height:"300px"}} >
            
            <div className="mb-4 mt-60">
            <h1 className="text-black-282C40 font-bold text-4xl mb-4">Sign Up</h1>
            <h2 className="text-primary text-xl mb-4">Welcome,<span className="text-secondary "style={{fontStyle:"italic"}}>Glad you are here~ </span></h2>
                <label >Employee ID</label>
                <input onChange={(e)=>{setUserName(e.target.value)}} className="w-full px-3 py-2 border border-secondary rounded-md" type='text' placeholder='Employee ID' />
            </div>
            <div className="mb-4">
                <label>Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} className="w-full px-3 py-2 border border-secondary rounded-md" type='password' placeholder='Password' />
            </div>
            <div className="mb-4">
                <label>Confirm password</label>
                <input onChange={(e)=>{setConfirmPassword(e.target.value)}} className="w-full px-3 py-2 border border-secondary rounded-md" type='password' placeholder='Confirm password' />
            </div>
            <div className="flex justify-between items-center   ">
                <div >
                    <p>Already a member?<span className="text-secondary cursor-pointer" onClick={renderLogin}>Login</span></p>
                </div>
                {/* <div className="text-fred">forget password</div> */}
                <button className={`px-10 py-3 rounded-lg bg-secondary text-fwhite ${disable?"bg-fred":"bg-secondary"}`} disabled={disable}>Sign Up</button>
            </div>
        </div>
    )
}

export default Signup;