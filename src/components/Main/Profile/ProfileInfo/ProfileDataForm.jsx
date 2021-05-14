import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";
import {compose} from "redux";
import {connect} from "react-redux";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>Full Name: <Field  component={Input} value={props.profile.fullName} name={'fullName'}/></div>
        <div>About Me: <Field component={Input} placeholder={props.profile.aboutMe} name={'aboutMe'}/></div>
        <div>Looking for a job:
            <Field component={Input} type={'checkbox'} name={'lookingForAJob'}/>
        </div>
        <div>Description job: <Field component={Input}
                                     name={'descriptionJob'}
                                     placeholder={props.profile.lookingForAJobDescription} /></div>
        <div><button>Save</button></div>

    </form>
}

export default compose(
    reduxForm({form:'profileData'}),
    connect(
        state => ({
            initialValues: {
                fullName: state.profilePage.profile.fullName
            }
        }),null)
    )(ProfileDataForm)