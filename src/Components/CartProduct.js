import { render } from '@testing-library/react'
import axios from 'axios'
const CartProduct = (props) => {
    console.log(props)

    const deleteFromCart = async () => {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            headers: {
                id: props.id
            }
           
        })
        
        props.getCartItems()
        props.setReget(1)
        console.log(res)
        console.log(props)

    }

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img className="pics" src={props.picture} />
            <p>{props.price}</p>
            <button onClick={ () => deleteFromCart()}>Remove From Cart</button>
        </div>
    )
}
export default CartProduct  