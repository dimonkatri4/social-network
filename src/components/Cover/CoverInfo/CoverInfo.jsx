import React from 'react'
import CoverMenu from './CoverMenu/CoverMenu'
import s from "./coverInfo.module.css"

const CoverInfo = () => {
    return (
        <div className={s.cover_info}> 
            <div className={s.user_name}>Cat Griffith</div>
            <CoverMenu/>
        </div>
    )
}

export default CoverInfo