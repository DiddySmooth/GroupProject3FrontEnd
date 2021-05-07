import axios from 'axios'
const OrderHistoryProduct = (props) => {

    
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img className="pics" src={props.picture} />
            <p>{props.price}</p>
        </div>
    )
}
export default OrderHistoryProduct