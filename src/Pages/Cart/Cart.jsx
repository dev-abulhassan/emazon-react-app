import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
   const { cart } = props
   let total = 0;
   let totalShipping = 0;
   
   for (const product of cart) {
      // totalShipping = shipping + product.shipping
      total = total + product.price;
   }
   const tax = total*7/100
   const grandTotal = total + tax

   const notify = () => toast("Wow so easy !");
   
   return (
      <div className='cart'>
         <h2>Order Summary</h2>
         <div className="cart-item">
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shopping: $</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p><strong>Grand Total: ${grandTotal.toFixed(2)}</strong></p>
           

         </div>
      </div>
   );
};

export default Cart;