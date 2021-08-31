import React from "react";
import page404 from "../../../images/404.svg";
import style from "./page404.module.css"
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Page404 = (props) => {
    return <div className='profile_block' >
        <div>
            <img src={page404} />
        </div>
        <div className={style.errorText}>
            <h1>Whoops! 404</h1>
            <p>We Couldn't Find That Page</p>
            <button className={classNames('button', style.btnBack)}>
                <NavLink to="/">Go Back Home</NavLink>
                </button>
        </div>

    </div>
}

export default Page404