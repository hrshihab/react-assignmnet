import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  function act() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const first10 = data.slice(0, 10);
        setProducts(first10);
      });
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {act();}, []);
  const [cart,setCart] = useState([]);

  const handleProduct = (product) => {
    console.log("added",product);
    const newCart = [...cart,product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product 
          handleProduct = {handleProduct}
          product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
