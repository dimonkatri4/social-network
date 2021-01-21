import React from "react";
import style from './signIn.module.css'

const SignIn = (props) => {
    return <div>
        <div className={style.inputPlace}>
            <input type="text" placeholder="User Name"/>
            <input type="password" placeholder="Password"/>
            <button className="button">Log In</button>
        </div>
        <div>

        </div>

    </div>
}

export default SignIn