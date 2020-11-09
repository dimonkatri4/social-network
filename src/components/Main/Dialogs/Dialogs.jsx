import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messagesData
        .map (message => <Message message={message.message} /> )

    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs