import React from 'react'
import { Outlet } from 'react-router-dom';

 const Products = () => {
    return (
        <div>
            <h1>Our Products:</h1>
            <hr></hr>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Products;