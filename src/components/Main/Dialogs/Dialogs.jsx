import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialog/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/2">Petro</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/3">Andriy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/4">Yuriy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/5">Oleg</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Do you like coffe?</div>
            </div>
        </div>
    )
}

export default Dialogs