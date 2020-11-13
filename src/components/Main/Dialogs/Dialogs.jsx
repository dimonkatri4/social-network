import React from 'react'
import { Route } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import InputMessage from './InputMessage/InputMessage'
import Message from './Message/Message'
import NameDialog from './NameDialog/NameDialog'
import SelectDialog from './SelectDialog/SelectDialog'


const Dialogs = (props) => {

    let nameDialogs = props.state.dialogs
        .map(el => <Route path={`/dialog/${el.id}`} render={() => <NameDialog img={el.img} name={el.name} />} />)
   
    let inputMessageElement = props.state.dialogs
        .map(el => <Route path={`/dialog/${el.id}`} render={() => <InputMessage />} />)

    let dialogsElement = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messagesElement = props.state.messages
        .map(message => <Route path={`/dialog/${message.id}`} render={() => <Message message={message.message} />} />)

    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={s.caption}>
                <h3>All Messages</h3>
            </div>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {nameDialogs}
                {messagesElement}
                {inputMessageElement}
                <Route exact path="/dialog" render={()=> <SelectDialog/>} />
            </div>
        </div>
    )
}

export default Dialogs