import React from 'react';

const OrderList = (props) => {
    const {cart} = props;
    return (
        <div className="card border-success mb-3 ms-4">
  <div className="card-header bg-transparent border-success">Order List</div>
  <div className="card-body text-success">
            {
                cart.map(product =><li>{product.productName}----{product.price}</li> )
            }
  </div>
</div>
    );
};

export default OrderList;