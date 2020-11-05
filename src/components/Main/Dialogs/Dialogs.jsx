import React from 'react'
import s from './dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Petro</div>
                <div className={s.dialog}>Andriy</div>
                <div className={s.dialog}>Yuriy</div>
                <div className={s.dialog}>Oleg</div>
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