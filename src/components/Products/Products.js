import React, { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleToCart = product =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const chooseOne = cart =>{
        const item = cart[Math.floor(Math.random() * cart.length)];
        const cartArray = [];
        cartArray.push(...cartArray, item)
        setCart(cartArray);
    }

    const removeProduct = () =>{
        setCart([]);
    }

    return (
           <div className='row g-0 m-0'>
             <div className='col-lg-3 col-sm-12 mt-4'>
            <OrderList 
            cart={cart}
            key={cart.id}
            ></OrderList>
            <div className='ms-4'>
            <button onClick={() => chooseOne(cart)}  type="button" className="btn btn-outline-dark my-2">Choose One</button> <br />
            <button onClick={removeProduct} type="button" className="btn btn-outline-danger">Reset</button>
            </div>
        </div>

            <div className="col-lg-9 col-sm-12 row row-cols-1 row-cols-md-3 m-0 g-4">
            {
                  products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleToCart={handleToCart}
                    ></Product>)
            }
        </div>
      
       </div>
    );
};

export default Products;