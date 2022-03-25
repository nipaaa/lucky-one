import React from 'react';

const Product = (props) => {
    const {id,picture,productName,price} = props.product;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{productName}</h2>
            <h3>{price}</h3>
           <img src={picture} alt="" srcset="" />
        </div>
    );
};

export default Product;