import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
   const products = useLoaderData();
   console.log(products);
   return (
      <div className='shop-container'>
         <div className="products-container">
            <h2>show some product: {products.length}</h2>
         </div>
         <div className="card-container">
           <Cart cart={[]}></Cart>
         </div>
      </div>
   );
};

export default Order;