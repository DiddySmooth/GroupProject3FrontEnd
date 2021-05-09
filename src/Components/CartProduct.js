import { render } from '@testing-library/react'
import {useState} from 'react'
import axios from 'axios'



    


const CartProduct = (props) => {



    const deleteFromCart = async () => {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            headers: {
                id: props.id
            }
           
        })
        props.getCart()
    }

  

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img className="pics" src={props.picture} />
            <p>{props.price}</p>
            <button onClick={ () => {deleteFromCart(); }}>Remove From Cart</button>
        </div>
    )
}
export default CartProduct      