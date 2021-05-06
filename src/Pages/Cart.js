import axios from 'axios'
import {useState, useEffect} from 'react'
import CartProduct from '../Components/CartProduct'
import {Link} from 'react-router-dom'
const Cart = () => {
    const[cart,setCart] = useState([])
    const[products, setProducts] = useState([])

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
            
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${entry.productId}`, {})
                newArray.push(res.data)
                
            } catch (error) {
                console.log(error)
            }
            
        })
        console.log(newArray)
        setProducts(newArray)
    }
    useEffect(() => {
        getCartItems()
        console.log(products)
    }, [cart])


    

    return (
        <div>
            {products.length>1 && products.map((product, i) =>
            <Link to={`/products/${product.id}`} key={i}>
                <CartProduct onClick="sup"  name={product.name} description={product.description} picture={product.image} price={product.price}/>
            </Link>
            )}
        </div>
    )   
}
export default Cart