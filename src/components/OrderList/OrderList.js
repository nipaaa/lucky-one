import React from 'react';

const OrderList = (props) => {
    const {cart} = props;
    return (
        <div class="card border-success mb-3 mx-4">
  <div class="card-header bg-transparent border-success">Order List</div>
  <div class="card-body text-success">
            {
                cart.map(product =><li>{product.productName}----{product.price}</li> )
            }
  </div>
</div>
    );
};

export default OrderList;