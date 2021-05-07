import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import BuyProduct from '../Components/BuyProduct'
import "../Styles/Store.css"

const SingleProduct = () => {
    const params = useParams()
    const[products,setProducts] = useState([])
    console.log(params.id)
    const getProduct = async() => {
        try {

            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${params.id}`, {})
            console.log(res.data)
            setProducts(res.data)
            
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        getProduct()
    }, [])

    
    return (
        <div className='productmain'>
            <div className='productcontainer'>
                <BuyProduct name={products.name} description={products.description} picture={products.image} price={products.price}/>    
            </div>
        </div>
    )
}
export default SingleProduct