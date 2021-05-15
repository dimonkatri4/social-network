import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";
import style from "../../../common/FormsControl/formsControl.module.css";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>Full Name: <Field component={Input} name={'fullName'} placeholder={'Full Name'}/></div>
        <div>About Me: <Field component={Input} placeholder={'About Me'} name={'aboutMe'}/></div>
        <div>Looking for a job:
            <Field component={Input} type={'checkbox'} name={'lookingForAJob'}/>
        </div>
        <div>Description job: <Field component={Input}
                                     name={'lookingForAJobDescription'}
                                     placeholder={'Your professional skills '}/>
        </div>
        {
            Object.keys(props.profile.contacts).map((key) => {
                return <ContactsForm key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        <div>
            <button>Save</button>
            <button onClick={props.exitToEditMode} >Exit</button>
        </div>
        { props.error && <div className={style.commonErrorLogin}>{props.error}</div>}

    </form>
}

const ContactsForm = (props) => {
    return <div>
        <span>{props.contactTitle}</span>
        <Field name={"contacts."+props.contactTitle} component={Input} />
    </div>
}



let ProfileDataFromReduxForm = reduxForm({form: 'profileDataEdit'})(ProfileDataForm);

export default ProfileDataFromReduxForm