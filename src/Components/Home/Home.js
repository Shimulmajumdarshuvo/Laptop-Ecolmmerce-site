import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

import useProducts from '../Hooks/UseCart';

import './Home.css'


const Home = () => {

    const [products] = useProducts();


    return (
        <div>
            <div className='header-part'>
                <div className='left-site'>
                    <h1>Laptop Ecommerce Site.</h1>
                    <h2>Choose the latest Products.</h2>
                    <p>They make its laptops both more powerful and more power-efficient,
                        meaning greatly improved performance and battery life. Plus, you get
                        other perks, like the ability to run mobile apps originally made for
                        iOS. Still, choosing a MacBook is now more difficult.
                        The MacBook is a brand of Macintosh notebook computers designed and
                        marketed by Apple Inc. that use Apple's macOS operating system since
                        2006. It replaced the PowerBook and iBook brands during the Mac transition
                        to Intel processors, announced in 2005.
                    </p>
                    <div >
                        <a href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook">
                            <button className='btn'>Choose Product</button>
                        </a>
                    </div>
                </div>
                <div className='right-site'>
                    <img src={`https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80`} alt="" />
                </div>


            </div>


            <div>
                <h1 className='product-size'> Customer Reviews :({products.slice(0, 3).length})</h1>

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
                <Link to="/reviews">
                    <button className='button' >
                        See All Reviews
                    </button>
                </Link>
            </div>

        </div >





    );
};

export default Home;