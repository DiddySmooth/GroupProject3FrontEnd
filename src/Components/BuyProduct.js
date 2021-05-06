const BuyProduct = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.picture} />
            <p>{props.price}</p>
            <button>Add To Cart</button>
        </div>
    )
}
export default BuyProduct