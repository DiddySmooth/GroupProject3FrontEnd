import axios from 'axios'
import {useState, useEffect} from 'react'
import CartProduct from '../Components/CartProduct'
import {Link} from 'react-router-dom'
const Cart = () => {
    const[cart,setCart] = useState([])
    const[products, setProducts] = useState()
    const[checkout, setCheckout] = useState(false)
    const[address, setAddress] = useState("")
    const[credit, setCredit] = useState('')
    const getCart = async() => {
        
        const userId = localStorage.getItem('userId')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
                headers:{
                    userId: userId
                }
                
            })
            console.log(res)
            setCart(res.data)
            
            
        } catch (error) {
            console.log(error)
        }
        
    }
    console.log(cart)
    useEffect(() => {
        getCart()
    }, [])

    const getCartItems = async() => {
        const items = await Promise.all(
            cart.map( async (entry, i) => {
              const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${entry.productId}`)
              let newObject = res.data
              console.log(entry)
              newObject.id = entry.id
              console.log(newObject)
              return newObject
            })
          )
          setProducts(items);
      }
 

    useEffect(() => {
        getCartItems()
    }, [cart])
    const emptyCart = async () => {
        const userId = localStorage.getItem('userId')
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart/all`, {
            headers: {
                userId: userId
            }
            
        })
        console.log(res)
    }
    const checkoutCart = () => {
        setCheckout(true)
    }
    const submitCheckout = () => {

    }

 console.log(products)
    console.log(cart)

    return (
        <div>
            { checkout ?
            <>
            <form onSubmit={submitCheckout}>
                <input className="checkout" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <input className="checkout" type="text" placeholder="Credit Card Number" value={credit} onChange={(e) => setCredit(e.target.value)} />
                <input className="checkout" type="submit" value="submit" />
            </form>
            </>
            :
            <>
            {products && products.map((product, i) =>
            product && 
                <CartProduct key={i}  id={product.id} name={product.name} description={product.description} picture={product.image} price={product.price}/>
            )}
            <button onClick={ () => {checkoutCart()}}>Checkout</button>
            <button onClick={ () => {emptyCart()}}>Empty Cart</button>
            </>
            }
        </div>
    )   
}
export default Cart