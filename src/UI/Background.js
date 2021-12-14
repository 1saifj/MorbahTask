import React from "react";
import style from "./Background.module.css";
import patter_top from "../assets/bg-pattern-top.svg";
import patter_bottom from "../assets/bg-pattern-bottom.svg";

const Background = () => {
  return (
    <div className={style.card}>
      <img className={style.top} src={patter_top} alt="topsvg" />
      <img className={style.bottom} src={patter_bottom} alt="bottomsvg" />
    </div>
  );
};

export default Background;
