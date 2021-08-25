import React from 'react';
import s from './Post.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import PostActions from "./PostActions/PostActions";

const Post = (props) => {

    return (
        <div className={s.item}>
            <PostHeader name={props.name}/>
            <PostContent content={props.content}/>
            <PostActions likes_count={props.likes_count} />
        </div>
    )
}

export default Post;