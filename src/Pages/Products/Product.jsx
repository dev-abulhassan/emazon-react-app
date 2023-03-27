import React from 'react';
import './Products.css'

const Product = (props) => {
   const {name, img, price, quantity, seller} = props.product
   return (
      <div className='all-product'>
         <img src={img} alt="" />
         <h5>{name}</h5>
      </div>
   );
};

export default Product;