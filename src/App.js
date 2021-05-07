import './App.css';
import axios from 'axios'
import { UserContext } from './Context/UserContext'
import { useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Store from "./Pages/Store"
import NavBar from './Components/NavBar'
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import OrderHistory from './Pages/OrderHistory'
import OneOrder from './Pages/OneOrder';

function App() {
  const { userState } = useContext(UserContext)
  const [user, setUser] = userState

  // const getUserInfo = async () => {
  //   const userId = localStorage.getItem('userId')
  //   try {
  //     let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/info`, {
  //       headers: {
  //         Authorization: userId
  //       }
  //     })
      
  //     if (res.data.user) {
  //       setUser(res.data.user)
  //       console.log(res.data.user)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => { getUserInfo() }, [])


  return (
    <div>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login" >
        {user ?
          <Redirect to="/" />
          :
          <Login />
        }
      </Route>
      <Route exact path="/register">
        {user ?
          <Redirect to="/" />
          :
          <Register />
        }
      </Route>
      <Route exact path="/store">
        {user ?
          <Store />
          :
          <Home />}
      </Route>
      <Route exact path="/products/:id">
        {user ?
          <SingleProduct />
          :
          <Home />}
      </Route>
      <Route exact path="/cart">
        {user ?
          <Cart />
          :
          <Home />}
      </Route>
      <Route exact path="/orders">
        {user ?
          <OrderHistory />
          :
          <Home />}
      </Route>
      <Route exact path="/orders/:id">
        {user ?
          <OneOrder />
          :
          <Home />}
      </Route>
    </div>
  );
}

export default App;
