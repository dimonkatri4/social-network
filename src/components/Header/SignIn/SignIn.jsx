import React from "react";
import style from './signIn.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {email, required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";


const SignInForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className={style.inputPlace}>
                <Field placeholder={'User Name'} component={Input} name={'login'} validate={[required,email]} />
                <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}
                       type={'password'} />
                { props.error && <div className={style.commonErrorLogin}>{props.error}</div>}
                <button className="button">Log In</button>
            </div>
        </form>
{/*        <div className={style.inputPlace}>
            <input type="text" placeholder="User Name"/>
            <input type="password" placeholder="Password"/>
            <button className="button">Log In</button>
        </div>*/}
    </div>
}

const SignInReduxForm = reduxForm({form:"login"})(SignInForm)

const SignIn = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password)
    }
    if(props.isAuth) {
        return <Redirect to='/profile' />
    }
    return <>
        <SignInReduxForm onSubmit={onSubmit}/>
    </>
}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(SignIn)