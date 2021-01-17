import React from 'react'
import CoverMenu from './CoverMenu/CoverMenu'
import s from "./coverInfo.module.css"

const CoverInfo = (props) => {
    return (
        <div className={s.cover_info}> 
            <div className={s.user_name}>{props.fullName}</div>
            <CoverMenu/>
        </div>
    )
}

export default CoverInfo