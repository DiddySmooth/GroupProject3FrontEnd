import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OrderList from '../Components/OrderList'
const OrderHistory = () => {
const [orders, setOrders] = useState([])
    const userId = localStorage.getItem('userId')
    const getAllOrders = async () => {
        let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
            headers: {
                userId: userId
            }
        })
        setOrders(res.data)
    }


    
    useEffect(() => {
        getAllOrders()
    }, [])




    return (
        <div>
         
            {orders.map((order, i) =>
                <Link to={`/orders/${order.groupId}`} key={i}>
                    <OrderList createdAt={order.createdAt}/>
                </Link>
            )}
        </div>
    )
}

export default OrderHistory