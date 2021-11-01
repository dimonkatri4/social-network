import React from "react";
import preloader from "../../../images/Preloader.svg";
import style from "./preloader.module.css"

const Preloader = () => {
    return <div className={style.pagination}>
        <img src={preloader} alt=""/>
    </div>
}

export default Preloader