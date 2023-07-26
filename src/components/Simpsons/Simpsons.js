import React from 'react';
import './Simpson.css';

const Simpsons = (props) => {
const {id,name,surname,age,photo } = props
    return (
        <div className={'container'} >
            <div className={'text'}>
             <h6>{id}</h6>
             <h6>{name}</h6>
             <h6>{surname}</h6>
             <h6>{age}</h6>
            </div>
            <img src={photo} alt=""/>

        </div>
    );
};

export default Simpsons;