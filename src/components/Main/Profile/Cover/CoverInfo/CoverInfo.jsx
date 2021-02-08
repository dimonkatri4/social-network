import React from 'react'
import CoverMenu from './CoverMenu/CoverMenu'
import s from "./coverInfo.module.css"
import ProfileStatus from "../../ProfileStatus/ProfileStatus";
import Cover from "../Cover";


const CoverInfo = (props) => {
    return (
            <div className={s.cover_info}>
                <div className={s.user_name}>{props.fullName}</div>
                <CoverMenu/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
    )
}

export default CoverInfo