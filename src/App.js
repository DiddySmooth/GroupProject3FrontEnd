import './App.css';
import {UserContext} from './Context/UserContext'
import {useEffect, useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Store from "./Pages/Store"
import NavBar from './Components/NavBar'
import SingleProduct from './Pages/SingleProduct';

function App() {
  const {userState} = useContext(UserContext)
  const[user,setUser] = userState
  return (
    <div>
      <NavBar />
      <Route exact path="/login">
        {user ? 
          <Redirect to="/store" />
        :
          <Login />
        }
      </Route>
      <Route exact path="/register">
        {user ? 
          <Redirect to="/store" />
        :
          <Register />
        }
      </Route>
      <Route exact path="/store">
          <Store />
      </Route>
      <Route exact path="/products/:id">
          <SingleProduct />
      </Route>
    </div>
  );
}

export default App;
