import React from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Service from './Service';
import Products from './Products'
import PageNot from './PageNot';
import ProductDetail from './ProductDetail'
import ProductHome from './ProductHome';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Project 3</h1>
      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="about">About</Link>{" "}
        <Link to="service">Service</Link>{" "}
        <Link to="products">Products</Link>{" "}
        <Link to="products/mobile">Mobile</Link>{" "}
        <Link to="products/laptop">Laptop</Link>{"     "}
        <button onClick={() => {
          navigate('about')
        }}>Contact us</button>
      </div>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductHome />}></Route>
          <Route path=":productID" element={<ProductDetail />}></Route>
        </Route>
        <Route path="*" element={<PageNot />}></Route>

      </Routes>


    </div>
  );
}

export default App;
