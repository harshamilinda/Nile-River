import React from 'react';
import './Customer.css';

const customer = (props) => {

    return (
        <div className="product-card">
            <h2>{props.name}</h2>
            <h4>{props.summary}</h4>
            <figure>
                <img src={props.imageUrl} alt="product" />
            </figure>
           
        </div>
    )
}

export default customer;