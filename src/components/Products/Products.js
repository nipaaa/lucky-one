import React, { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
       <div className='row'>
             <div className='col-lg-3  col-sm-12 '>
            <OrderList></OrderList>
        </div>
            <div class="col-lg-9 col-sm-12 row row-cols-1 row-cols-md-3 g-4">
            {
                  products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
            }
        </div>
      
       </div>
    );
};

export default Products;