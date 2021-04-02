
import Logout from '../components/auth/Logout'
const Navbar=()=>{

    return(
        <div className="flex justify-between bg-secondary p-8 text-fwhite">
            <p className="text-lg font-bold">MERN TODO</p>
            <Logout/>
        </div>
    )
}

export default Navbar;