import Product from "../Components/Product"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Store = () => {
    const[allProducts,setAllProducts] = useState([])
    const params = useParams()
    const getAllProducts = async() => {
        try {

            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/`, {})
            console.log(res.data)
            setAllProducts(res.data)
            
            
        } catch (error) {
            console.log(error)
        }
    }
    
    

    
    useEffect(() => {
        getAllProducts()
    }, [])
    console.log(allProducts)
    return(
        <div>
            
        </div>
    )
}
export default Store