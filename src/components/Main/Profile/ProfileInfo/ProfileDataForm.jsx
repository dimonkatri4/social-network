import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>Full Name: <Field component={Input} placeholder={props.profile.fullName} name={'fullName'}/></div>
        <div>About Me: <Field component={Input} placeholder={props.profile.aboutMe} name={'aboutMe'}/></div>
        <div>Looking for a job:<Field component={Input} type={'radio'}/></div>
        <div>Description job: <Field component={Input}
                                     name={'descriptionJob'}
                                     placeholder={props.profile.lookingForAJobDescription} /></div>

    </form>
}

export default reduxForm({form:'profileData'})(ProfileDataForm)