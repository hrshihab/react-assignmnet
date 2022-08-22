import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
const Shop = () => {
  function act(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const first10=data.slice(0,10);
      setProducts(first10);
    }); 
  }
   
  

  const [products, setProducts] = useState([]); 
  useEffect(() => {act()},[])
 


  return (
    <div className="shop-container">
     <div className="product-container">
      {products.map(pd => <Product product={pd}></Product>)}
     </div>
     <div className="cart-container"></div>
    </div>
  );
};

export default Shop;
