import React from 'react';
import s from './PostActions.module.css';

const PostActions = (props) => {
    return (
        <div className={s.actions_buttons}>
            <div className={s.like_btn}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_56552.png" />
                <a className={s.like_count_text}>{props.likes_count}</a>
            </div>

        </div>

    )
}

export default PostActions;