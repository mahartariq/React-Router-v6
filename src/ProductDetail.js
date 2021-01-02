import React from 'react'
import { useParams } from 'react-router-dom';

 const Products = () => {
    const {productID} = useParams()
    return (
        <div>
            <h1>Fashion Tonight Product:{productID}</h1>
            <h2>Sony</h2>
            <h2>Apple</h2>
            <h2>Samsung</h2>
        </div>
    )
}
export default Products;