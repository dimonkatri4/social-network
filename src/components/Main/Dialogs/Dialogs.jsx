import React from 'react'
import {Route} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './Message/Message'
import NameDialog from './NameDialog/NameDialog'
import SelectDialog from './SelectDialog/SelectDialog'
import InputMessageContainer from "./InputMessage/InputMessageContainer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


const Dialogs = (props) => {

    let nameDialogs = props.dialogsPage.dialogs
        .map(el => <Route path={`/dialog/${el.id}`}
                          key={el.id}
                          render={() => <NameDialog img={el.img} name={el.name} key={el.id}/>}/>)

    // let number = Number();
    // props.dialogsPage.dialogs
    //     .map(el => <Route path={`/dialog/${el.id}`} render={() => <InputMessage addMessage={props.addMessage} />} />)

    let dialogsElement = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} key={dialog.id}/>)

    let messagesElement = props.dialogsPage.messages
        .map(message => <Route path='/dialog/:numder'
                               key={message.id}
                               render={() => <Message message={message.message} key={message.id}/>}/>)

/*    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }*/
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
                <Route path='/dialog/:number' render={() => <InputMessageContainer/>}/>
                <Route exact path="/dialog" render={() => <SelectDialog/>}/>
            </div>
        </div>
    )
}

export default withAuthRedirect(Dialogs)