import React from 'react';
import Card from '../Card/Card';
import useProducts from '../Hooks/UseCart';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
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