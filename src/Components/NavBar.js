import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import '../Styles/NavBar.css'
const NavBar = () => {
    const {userState} = useContext(UserContext)
    const[user,setUser] = userState

    const logout = () => {
        localStorage.removeItem("userId")
        setUser(null)
    }
    return(
        <div className="navBarContainer">
            {localStorage.getItem('userId') ?
            <>
            <Link className="navLink" to="/cart">Cart</Link>
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