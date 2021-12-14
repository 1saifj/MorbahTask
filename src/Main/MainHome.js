import React from "react";
import style from "./MainHome.module.css";
import patter_top from "../assets/bg-pattern-top.svg";
import patter_bottom from "../assets/bg-pattern-bottom.svg";
import mh from "../assets/mh.png";
import CustomButton from "../UI/CustomButton";
import { useHistory } from "react-router-dom";

const MainHome = () => {
  const history = useHistory();
  return (
    <div className={style.card}>
      <img className={style.top} src={patter_top} alt="topsvg" />
      <img className={style.bottom} src={patter_bottom} alt="bottomsvg" />
      <div className={style.card}>
        <div className={style["card-header"]}>
          <img className={style["header-img"]} src={mh} alt="companylogo" />
        </div>
        <div className={style["card-body"]}>
          <h1 className={style["text-style"]}>المربع للحلول البرمجية</h1>
          <h1 className={style["text-style"]}>برنامج إدارة محلات الصيانة</h1>
        </div>
        <div className={style.flexbuttons}>
          <CustomButton onClick={() => history.push("/AddUser")}>
            إضافة مستخدم جديد
          </CustomButton>
          <CustomButton onClick={() => history.push("/AddDevice")}>
            إضافة جهاز
          </CustomButton>
          <CustomButton onClick={() => history.push("/ControlPanel")}>
            لوحة التحكم
          </CustomButton>
          <CustomButton onClick={() => history.push("/profits")}>
            ارباح
          </CustomButton>
          <CustomButton onClick={() => history.push("/calls_history")}>
            سجل المكالمات
          </CustomButton>
          <CustomButton onClick={() => history.push("/settings")}>
            اعدادات
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
