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
    const[total, setTotal] = useState(0)
    const[reget, setReget] = useState(0)
    const getCart = async() => {
        
        const userId = localStorage.getItem('userId')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
                headers:{
                    userId: userId
                }
                
            })
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
              newObject.id = entry.id
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
    }

    const checkoutCart = () => {
        setCheckout(true)
    }
    
    const submitCheckout =  async (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('userId')
        const groupId = userId + "|" + new Date()
        console.log(groupId)
        cart.map( async (entry, i) => {
            let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
                userId: userId,
                productId: entry.productId,
                creditcard: credit,
                address: address,
                groupId: groupId
            })
            console.log(res)
        })
        let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/history`,{
            userId: userId,
            groupId: groupId
        })
        console.log(res)
        emptyCart()
        setCheckout(false)
    }
    

    const getTotal = () => {
        let test = 0
    products && products.map((product, i) => {
        test = test + parseInt(product.price)
        setTotal(test)}
    )}

    useEffect(() => {
        getTotal()
        
    }, [products])



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
            <h2>Total Price: ${total}</h2>
            {products && products.map((product, i) =>
            product && 
                <CartProduct setReget={setReget} getCartItems={getCartItems} key={i}  id={product.id} name={product.name} description={product.description} picture={product.image} price={product.price}/>
                
            )}
            <button onClick={ () => {checkoutCart()}}>Checkout</button>
            <button onClick={ () => {emptyCart()}}>Empty Cart</button>
            </>
            }
        </div>
    )   
}
export default Cart