import React from 'react';
import s from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={s.post_header}>
            <div className={s.photo}>
                <img className={s.userPhoto} src='https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'/>
            </div>
            <div className={s.post_header_info}>
                <a className={s.post_author}>
                    {props.name}
                </a>
                <div className={s.post_date}>
                    2 Aug 2021
                </div>
            </div>
        </div>
    )
}

export default PostHeader;