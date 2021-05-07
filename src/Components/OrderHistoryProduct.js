import axios from 'axios'
import "../Styles/Store.css"
const OrderHistoryProduct = (props) => {
        
    
    return (
        <div className='productmain'>
            <div className='productcontainer'>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <img className="pics" src={props.picture} />
                <p>{props.price}</p>
            </div>
        </div>
    )
}
export default OrderHistoryProduct