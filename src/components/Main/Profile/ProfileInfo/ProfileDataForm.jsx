import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";
import s from "../../../common/FormsControl/formsControl.module.css";
import style from "./profileDataForm.module.css"
import classNames from "classnames";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.infoItem}>Full Name: <Field className={classNames("inputPlace",style.inputItem)} component={Input}
                               name={'fullName'} placeholder={'Full Name'}/></div>
        <div className={style.infoItem}>About Me: <Field className={classNames("inputPlace",style.inputItem)} component={Input}
                              placeholder={'About Me'} name={'aboutMe'}/></div>
        <div className={classNames(style.infoItem, style.checkbox)}>Looking for a job:
            <Field component={Input} type={'checkbox'} name={'lookingForAJob'}/>
        </div>
        <div className={style.infoItem}>Description job: <Field component={Input}
                                     className={classNames("inputPlace",style.inputItem)}
                                     name={'lookingForAJobDescription'}
                                     placeholder={'Your professional skills '}/>
        </div>
        {
            Object.keys(props.profile.contacts).map((key) => {
                return <ContactsForm key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        <div className={style.buttonsBlock}>
            <button className="button" >Save</button>
            <button className="button" onClick={props.exitToEditMode} >Exit</button>
        </div>
        { props.error && <div className={s.commonErrorLogin}>{props.error}</div>}

    </form>
}

const ContactsForm = (props) => {
    return <div className={style.infoItem}>
        <span>{props.contactTitle}</span>
        <Field className={classNames("inputPlace",style.inputItem)}
               name={"contacts."+props.contactTitle} component={Input} />
    </div>
}



let ProfileDataFromReduxForm = reduxForm({form: 'profileDataEdit'})(ProfileDataForm);

export default ProfileDataFromReduxForm