import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './Message/Message'

const Dialogs = () => {

    let dialogsData = [
        { name: 'Dima', id: '1' },
        { name: 'Oleg', id: '2' },
        { name: 'Yuriy', id: '3' },
        { name: 'Petro', id: '4' },
        { name: 'Andriy', id: '5' }
    ]

    let messagesDate = [
        { id: '1', message: 'Hi!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Do you like coffe?' },
        { id: '4', message: 'YO!' },
        { id: '5', message: 'Blablabla' }
    ]

    let dialogsElement = dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = messagesDate
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