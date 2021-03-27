import React from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const Landing=()=>{
    const [isSignUp,setIsSignUp]=React.useState<boolean>(false);

    var d = new Date();
    var n = d.getTime()

    return(
        <div className="flex w-full h-screen bg-fback  rounded-lg">
            <div className="w-1/2 max-w-xs mx-auto relative ">
                <div className="absolute insert-0 m-auto" >
                {isSignUp && <Signup renderLogin={()=>setIsSignUp(false)}/> ||<Login renderSignUp={()=>setIsSignUp(true)}/>}
                </div>

                {/* New user?<span onClick={()=>setIsSignUp(true)}>ClicK here</span> */}
                </div>
            <div className="w-1/2 bg-cover bg-no-repeat bg-Vectorlanding">
            {n}
            </div>
            
        </div>
    )
}

export default Landing;
