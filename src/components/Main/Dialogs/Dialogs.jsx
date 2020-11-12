import React from 'react'
import { Route } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './Message/Message'


const Dialogs = (props) => {

    const NameDialog = (props) => {
        return (
            <div className={s.name_dialog}>
                <div>
                    <img src={props.img} />
                </div>
                <div className={s.name}>{props.name}
                    <div className={s.status}>online</div>
                </div>
            </div>
        )
    }

    let path = "/dialog/" + props.state.dialogs[0].id

    let dialogsElement = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messagesElement = props.state.messages
        .map(message => <Message message={message.message} />)

    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.caption}>
                <h3>All Messages</h3>
            </div>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <Route path={path} render={()=> <NameDialog img={props.state.dialogs[0].img} name={props.state.dialogs[0].name} />} />
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs