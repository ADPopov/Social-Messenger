import React from "react";
import s from "./PostContent.module.css";

const PostContent = (props) => {
  return <div className={s.wall_text}>{props.content}</div>;
};

export default PostContent;
