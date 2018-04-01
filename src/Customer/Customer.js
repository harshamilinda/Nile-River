import React from 'react';

const customer = (props) => {
    const style1 ={
        width: '80%',
        margin: '10px',        
    }
    const style2 ={
        width: '30%'
    }
    return(
        <div className="w3-container">
        <div className="w3-card-4" style={style2}>
        <header className="w3-container w3-light-grey">
            <h3>{props.name}</h3>
        </header>
        <div className="w3-container">
        <p>{props.summary}</p>
        <hr/>
        <img src={props.imageUrl} alt="Avatar" className="w3-left w3-margin-right" style={style1}/>
        <br/>
        </div>
        </div>

        </div>
    )
}

export default customer;