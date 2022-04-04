import React from 'react';
import Card from '../Card/Card';

import useProducts from '../Hooks/UseCart';

import './Home.css'


const Home = () => {

    const [products, setProducts] = useProducts();


    return (
        <div>
            <div className='header-part'>
                <div className='left-site'>
                    <h1>Laptop Ecommerce Site.</h1>
                    <h3>Choose the latest Products.</h3>
                    <p>Laptop is the most poplucation connection site.Laptop is the most poplucation connection site. <br />
                        Laptop is the most poplucation connection site.Laptop is the most poplucation connection site. <br />
                        Laptop is the most poplucation connection site.Laptop is the most poplucation connection site.
                    </p>
                    <div >
                        <button className='btn'>Choose Product</button>
                    </div>
                </div>
                <div className='right-site'>
                    <img src={`https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80`} alt="" />
                </div>


            </div>


            <div>

                <div className="products">
                    {
                        products.slice(0, 3).map(product => <Card

                            key={product.id}
                            product={product}
                        ></Card>)
                    }
                </div>

            </div>
            <div className='btn-part'>
                <button className='button'>
                    See All Reviews
                </button>
            </div>

        </div >





    );
};

export default Home;