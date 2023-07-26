import React from 'react';
import './RickAndMorty.css';

const RickAndMorty = (props) => {
    const {id,name,status,species,gender,image } = props
    return (
        <div>
            <div className={'container'} >
                <div className={'text'}>
                    <h6>{id}</h6>
                    <h6>{name}</h6>
                    <h6>{status}</h6>
                    <h6>{species}</h6>
                    <h6>{gender}</h6>
                </div>
                <img src={image} alt=""/>

            </div>

        </div>
    );
};

export default RickAndMorty;