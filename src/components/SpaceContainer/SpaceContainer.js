import React from 'react';
import styles from "../PostComponent/PostComponent.module.scss";
import PostDetail from "../PostDetail/PostDetail";

const SpaceContainer = (props) => {
const {flight} = props
    return (
        <div>
            <div className={styles.container}>
                <h6>{flight.mission_name}</h6>
                <h6>{flight.launch_year}</h6>
                <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
            </div>
        </div>
    );
};

export default SpaceContainer;