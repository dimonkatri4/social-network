import React from 'react'
import { Route } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './Message/Message'
import NameDialog from './NameDialog/NameDialog'
import SelectDialog from './SelectDialog/SelectDialog'
import InputMessageContainer from "./InputMessage/InputMessageContainer";


const Dialogs = (props) => {

    //   debugger;
    let nameDialogs = props.dialogsPage.dialogs
        .map(el => <Route path={`/dialog/${el.id}`} render={() => <NameDialog img={el.img} name={el.name} />} />)

    // let number = Number();
    // props.dialogsPage.dialogs
    //     .map(el => <Route path={`/dialog/${el.id}`} render={() => <InputMessage addMessage={props.addMessage} />} />)

    let dialogsElement = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messagesElement = props.dialogsPage.messages
        .map(message => <Route path='/dialog/:numder' render={() => <Message message={message.message} />} />)

    return (
        <div className={`${s.dialogs} profile_block`}>
            <div className={`${s.caption} caption`}>
                <h3 className="title">All Messages</h3>
            </div>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {nameDialogs}
                {messagesElement}
                <Route path='/dialog/:number' render={() => <InputMessageContainer/>} />
                <Route exact path="/dialog" render={() => <SelectDialog />} />
            </div>
        </div>
    )
}

export default Dialogs