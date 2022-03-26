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
    return (
       <div className='row g-0'>
             <div className='col-lg-3 col-sm-12 bg-light  mt-5 border border-secondary'>
            <OrderList 
            cart={cart}
            key={cart.id}
            ></OrderList>
        </div>
        
            <div class="col-lg-9 col-sm-12 row row-cols-1 row-cols-md-3 g-4">
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