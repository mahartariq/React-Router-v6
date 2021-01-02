import React from 'react'
import { useParams } from 'react-router-dom';

 const Products = () => {
    const {productID} = useParams()
    return (
        <div>
            <h1>Fashion Tonight Product:{productID}</h1>
        </div>
    )
}
export default Products;