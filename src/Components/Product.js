const Product = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.picture} />
            <p>{props.price}</p>
        </div>
    )
}
export default Product