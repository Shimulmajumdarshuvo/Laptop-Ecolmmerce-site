import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, img, review, ratings, } = props.product;
    return (
        <div className='card-component'>
            <img src={img} alt="" />
            <h6>Name:{name}</h6>
            <p>Rating: ${ratings}</p>
            <p>{review}</p>
        </div>
    );
};

export default Card;