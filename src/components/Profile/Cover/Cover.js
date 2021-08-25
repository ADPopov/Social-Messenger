import React from "react";
import s from "./Cover.module.css";

const Cover = () => {
  return (
    <div className={s.cover_wrap}>
      <img src="https://images.unsplash.com/photo-1603888134358-869041ecf702?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
    </div>
  );
};

export default Cover;
