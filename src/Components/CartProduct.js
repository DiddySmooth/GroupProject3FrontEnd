const CartProduct = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.picture} />
            <p>{props.price}</p>
            <button>Remove From Cart</button>
        </div>
    )
}
export default CartProduct