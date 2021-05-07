import axios from 'axios'
import {useParams} from 'react-router-dom'
import "../Styles/Store.css"

const BuyProduct = (props) => {

    const params = useParams()
    console.log(params)
    const cartSubmit = async() => {
        try {
            const userId = localStorage.getItem('userId')
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/${params.id}`, {
                userId: userId
            })
            console.log(res.data)

      
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.picture} />
            <p>{props.price}</p>
            <button onClick={() => {cartSubmit()}}>Add To Cart</button>
        </div>
    )
}
export default BuyProduct