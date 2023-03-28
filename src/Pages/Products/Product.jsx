import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = (props) => {
   // console.log(props)
   const { name, img, price, ratings, seller } = props?.product

   const addToCart = (product) => {
      props.addToCart(product);
      toastify(); 
    };
  
    const toastify = () => {
      toast("Your products added");
    };

   // const addToCart = props.addToCart
   // const toastify = ()=> {
   //    toast("Wow so easy !")
   // }


   return (
      <div className='all-product'>
         <img src={img ? img : 'No img found'} alt="" />
         <h4>{name}</h4>
         <h4>Price ${price}</h4>
         <div className="card-item">
            <h3>Manufacturer: {seller}</h3>
            <h5>Ratings: {ratings} star</h5>
         </div>
         <button className='addToCart' onClick={() => addToCart(props.product)}>Add To Cart
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} />
            <ToastContainer />
         </button>
      </div>
   );
};

export default Product;