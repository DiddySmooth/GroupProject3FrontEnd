import axios from 'axios'
const CartProduct = (props) => {
    console.log(props)

    for (let id of props.cart){
        console.log(id.id)
    }

    const deleteFromCart = async () => {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            id: props.id
        })
        console.log(res)
    }
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img className="pics" src={props.picture} />
            <p>{props.price}</p>
            <button onClick={ 
                () => {
                    console.log(props.cart.id)
                    // deleteFromCart(props.cartId)
                }} >Remove From Cart</button>
        </div>
    )
}
export default CartProduct