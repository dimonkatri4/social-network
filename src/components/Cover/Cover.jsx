import React from 'react'
import CoverInfo from './CoverInfo/CoverInfo'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'
import s from "./cover.module.css"

const Cover = () => {
    return (
        <div className={s.cover}>
            <CoverPhoto/>
            <MainPhoto/>
            <CoverInfo/>
        </div>
    )
}

export default Cover