import axios from 'axios'
const CartProduct = (props) => {
    const deleteFromCart = async (id) => {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            id: id
        })
    }
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.picture} />
            <p>{props.price}</p>
            <button onClick={ () => {deleteFromCart(props.cartId)}} >Remove From Cart</button>
        </div>
    )
}
export default CartProduct