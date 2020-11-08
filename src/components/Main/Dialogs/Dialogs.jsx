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
        { id: '4', message: 'YO!' }
    ]

    


    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesDate[0].message} />
                <Message message={messagesDate[1].message} />
            </div>
        </div>
    )
}

export default Dialogs