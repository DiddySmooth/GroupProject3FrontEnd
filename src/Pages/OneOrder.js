import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import OrderHistoryProduct from '../Components/OrderHistoryProduct'
const OneOrder = () => {
    const params = useParams()

    const [order, setOrder] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    
    const getOneOrder = async () => {
        let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders/one`, {
            headers: {
                groupId: params.id
            }
        })
        setOrder(res.data)
       
    }

    useEffect(() => {
        getOneOrder()
    }, [])


    const getCartItems = async () => {
        const items = await Promise.all(
            order.map(async (entry, i) => {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${entry.productId}`)
                let newObject = res.data
     
                newObject.id = entry.id
               
                return newObject
            })
        )
        setProducts(items);

    }

    useEffect(() => {
        getCartItems()

    }, [order])

    const getTotal = () => {
        let test = 0
        products && products.map((product, i) => {
            test = test + parseInt(product.price)
            setTotal(test)
        }
        )
    }

    useEffect(() => {
        getTotal()

    }, [products])


    return (
        <>
            <h2>Total Price: ${total}</h2>

            {products && products.map((product, i) =>
                product &&
                <OrderHistoryProduct key={i} id={product.id} name={product.name} description={product.description} picture={product.image} price={product.price} />
            )}
        </>
    )
}

export default OneOrder