import React from 'react'
import CoverMenu from './CoverMenu/CoverMenu'
import s from "./coverInfo.module.css"
import ProfileStatusWithHook from "../../ProfileStatus/ProfileStatusWithHook";


const CoverInfo = (props) => {
    return (
        <div className={s.cover_info}>
            <div className={s.nameWithStatus}>
                <div className={s.user_name}>{props.fullName}</div>
                <ProfileStatusWithHook status={props.status}
                                       updateStatus={props.updateStatus}
                                       isOwner={props.isOwner}
                                       errorInStatus={props.errorInStatus}
                                       setErrorInStatus={props.setErrorInStatus}
                />
            </div>
            {/*<CoverMenu/>*/}

        </div>
    )
}

export default CoverInfo