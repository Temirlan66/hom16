import React from 'react';

const ProductItem = ({title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    );
};

export default ProductItem;