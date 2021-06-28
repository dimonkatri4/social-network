import React from 'react'
import s from "./logo.module.css"

const Logo = () => {
    return (
        <div className={s.logo}>
            <a href="/">
                <img src='http://wpkixx.com/html/winku/images/logo.png' alt="logo"/>
            </a>
        </div>
    )
}

export default Logo