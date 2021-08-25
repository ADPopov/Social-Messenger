import React from "react";
import loaderSVG from "../../../assets/svg/loader.svg";
import s from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={s.loader}>
      <img src={loaderSVG} />
    </div>
  );
};

export default Loader;
