import React from "react";
import {Field, Form} from "react-final-form";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../../redux/auth-reducer";
import {Input} from "../../common/FormsControl/FormsControl";
import {composeValidators, email, required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../../common/FormsControl/formsControl.module.css"
import s from "./login.module.css"
import classNames from "classnames";
import winkSmile from "../../../images/winkSmile.png"
import logo from "../../../images/logo.png"


const LoginForm = (props) => {
    return <Form onSubmit={props.onSubmit} >
        {({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <div>
            <Field className={classNames("inputPlace", s.loginInput)} placeholder={'Email'} component={Input}
                   name={'login'} validate={composeValidators(required, email)}/>
        </div>
        <div>
            <Field className={classNames("inputPlace", s.loginInput)} placeholder={'Password'} component={Input}
                   name={'password'} validate={required} type={'password'}/>
        </div>
        <div className={s.rememberMe}>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>Remember Me
        </div>
        {props.captcha &&
        <div className={s.captcha}>
            <img src={props.captcha} onClick={props.getCaptchaUrl} title="click to update the image" alt="captcha"/>
            <Field className={classNames("inputPlace")} placeholder={'Enter the symbols'}
                   component={Input} name={'captcha'} validate={required}/>
        </div>}
        {props.error && <div className={style.commonErrorLogin}>{props.error}</div>}
        <div>
            <button className={classNames("button", s.loginButton)}>Login</button>
        </div>
    </form>
            )}
    </Form>
}

//const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div className={s.loginPage}>
        <div className={s.greeting}>
            <div className={s.greetingText}>Welcome to the <br/>social network
                <div><img src={logo}/></div>
            </div>
            <div className={s.smile}>
                <img src={winkSmile}/>
            </div>
        </div>
        <div className={classNames("profile_block", s.loginForm)}>
            <div className={`caption`}>
                <h3 className="title">Login</h3>
            </div>
            <LoginForm onSubmit={onSubmit} captcha={props.captchaUrl}
                       getCaptchaUrl={props.getCaptchaUrl} error={props.error}/>
        </div>
    </div>
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    error: state.auth.requestError
})
export default connect(mapStateToProps, {login, getCaptchaUrl})(Login)