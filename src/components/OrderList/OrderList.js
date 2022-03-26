import React from 'react';

const OrderList = (props) => {
    const {cart} = props;
    return (
        <div>
            <h3 className='pt-3'>Order List</h3> <br />
            {
                cart.map(product =><li>{product.productName}----{product.price}</li> )
            }
            <button type="button" className="btn btn-outline-dark">Choose One</button> <br /> <br />
            <button type="button" className="btn btn-outline-dark">Reset</button>
        </div>
    );
};

export default OrderList;