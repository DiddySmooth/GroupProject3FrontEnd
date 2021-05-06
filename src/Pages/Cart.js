import axios from 'axios'
import {useState, useEffect} from 'react'
import CartProduct from '../Components/CartProduct'
import {Link} from 'react-router-dom'
const Cart = () => {
    const[cart,setCart] = useState([])
    const[products, setProducts] = useState()

    const getCart = async() => {
        
        const userId = localStorage.getItem('userId')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
                headers:{
                    userId: userId
                }
                
            })
            console.log(res.data)
            setCart(res.data)
            
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        getCart()
    }, [])

    const getCartItems = async() => {
        let newArray = []
        cart.map( async (entry, i) => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${entry.productId}`)
            newArray.push(res.data)
            setProducts(newArray)
        })
    }

    useEffect(() => {
        getCartItems()
    }, [cart])

    

 console.log(products)
    

    return (
        <div>
            
            {products && products.map((product, i) =>
            product && 
                <CartProduct key={i}  cartId={product.id} name={product.name} description={product.description} picture={product.image} price={product.price}/>
            )}
        </div>
    )   
}
export default Cart