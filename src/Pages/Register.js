import {useState, useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import axios from 'axios'


const Register = () => {
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState
    
    // form input states 
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const registerSubmit = async (e) => {
        e.preventDefault()
        console.log(password,name,email)
        let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create`, {
            name: name,
            email: email,
            password: password,
        })
        
        console.log(res.data)
        localStorage.setItem('userId', res.data.encryptedId)
        setUser(res.data.user)
    }

    return (
        <div className="loginContainer">
            <div className="loginFormContainer">
                <h1>Register</h1>
                <form className="loginForm" onSubmit={registerSubmit}>
                    <input className="loginFormInput" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="loginFormInput" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="loginFormInput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="loginFormButton" type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Register 