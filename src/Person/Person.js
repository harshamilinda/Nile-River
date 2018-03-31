import React from 'react';

const person = (props) => {
    return (
        <div>
            <p className='person'>The Nile is a major north-flowing river in northeastern Africa, and is commonly regarded as the longest river in the world,
            though some sources cite the Amazon River as the longest.<br /><strong>Author:</strong>{props.name} </p>
            <p className='section'>{props.children}</p>
            <p className='mini-section'><strong>Author: </strong>{props.author}</p>
        </div>
    )

}

export default person;