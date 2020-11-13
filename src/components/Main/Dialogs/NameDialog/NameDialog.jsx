import React from 'react'
import s from './nameDialog.module.css'

const NameDialog = (props) => {
    return (
        <div className={s.name_dialog}>
            <div>
                <img src={props.img} alt="" />
            </div>
            <div className={s.name}>{props.name}
                <div className={s.status}>online</div>
            </div>
        </div>
    )
}

export default NameDialog
