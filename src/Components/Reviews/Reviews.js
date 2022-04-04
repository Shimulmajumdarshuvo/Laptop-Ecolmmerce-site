import React from 'react';
import Card from '../Card/Card';
import useProducts from '../Hooks/UseCart';
import './Reviews.css'

const Reviews = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className='titel-bar'>Customer Reviews:({products.length})</h1>
            <div className="products">

                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Reviews;