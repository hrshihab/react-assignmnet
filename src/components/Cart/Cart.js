import React from 'react';

const Cart = (props) => {
  const cart = props.cart;

  //const total = cart.reduce((total,prd) => total+prd.price,0)
  let total = 0;
  for(let i=0;i<cart.length;i++)
  {
    const product = cart[i];
    total = total+product.id*10;
    total -=0.01;
   
  }
  let shipping = 0 ;
  if(total < 50 && total > 0) shipping += 9.99;
  else if(total > 50) shipping += 5.99;

  const tax = (total /10 );
  const grandTotal = (total + tax + shipping); 
const formatNum = (num) => {
  const precision = num.toFixed(2);
  return Number(precision);

}
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items ordered:{cart.length}</p>
      <p>Price: {formatNum(total)}</p>
      <p>shipping:{shipping}</p>
      <p>tax:{formatNum(tax)}</p>
      <p>GrandTotal : {formatNum(grandTotal)}</p>
   
      
    </div>
  );
};

export default Cart;