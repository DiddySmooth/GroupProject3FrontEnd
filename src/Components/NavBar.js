import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
const NavBar = () => {
    const {userState} = useContext(UserContext)
    const[user,setUser] = userState

    const logout = () => {
        localStorage.removeItem("userId")
        setUser(null)
    }
    return(
        <div className="navBarContainer">
            {user ?
            <>
            <span  onClick={() => logout()}><Link className="navLink" to="/">Logout</Link></span>
            </>
            :
            <>
            <Link className="navLink" to="/store">Store</Link>
            <Link className="navLink" to="/register">Register</Link>
            <Link className="navLink" to="/login">Login</Link> 
            </>
            }
        </div>
    )
}
export default NavBar