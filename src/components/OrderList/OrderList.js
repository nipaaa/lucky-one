import React from 'react';

const OrderList = (props) => {
    const {cart} = props;
    return (
        <div className='ps-5'>
            <h3>Order List</h3>
            {
                cart.map(product =><li>{product.productName}----{product.price}</li> )
            }
        </div>
    );
};

export default OrderList;