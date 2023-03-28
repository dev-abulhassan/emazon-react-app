import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])
   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, []);
   useEffect(() => {
      const storedCart = getShoppingCart()
      const saveCart = []
      for (const id in storedCart) {
         const savedProduct = products.find(product => product.id === id)
         if (savedProduct) {
            const quantity = storedCart[id];
            savedProduct.quantity = quantity
            saveCart.push(savedProduct);
         }
      }
      setCart(saveCart)
   }, [products])
   const addToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart)
      addToDb(product.id)
   }

   return (
      <div className='shop-container'>
         <div className="products-container">
            {
               products.map(product => <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
               ></Product>)
            }
         </div>
         <div className="card-container">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;