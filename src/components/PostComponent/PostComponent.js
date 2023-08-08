import React, {useState} from 'react';

import styles from "./PostComponent.module.scss";
import PostDetail from "../PostDetail/PostDetail";

const PostComponent = (props) => {
    const {post} = props;
    const [isShow, setIsShow] = useState(false);

    return (
            <div className={styles.container}>
                <h6>{post.id}</h6>
                <h6>{post.title}</h6>
                <button onClick={()=>setIsShow(prev=>!prev)}>{isShow?'Hide':'Show'}</button>
                {
                    isShow&&<PostDetail post={post}/>
                }
            </div>
    );
};

export default PostComponent;