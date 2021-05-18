import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../../redux/auth-reducer";
import {Input} from "../../common/FormsControl/FormsControl";
import {email, required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../../common/FormsControl/formsControl.module.css"


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} component={Input} name={'login'} validate={[required,email]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>Remember Me
        </div>
        {props.captcha && <img src={props.captcha} onClick={props.getCaptchaUrl} title="click to update the image" alt="captcha"  />}
        {props.captcha && <Field placeholder={'Enter the symbols shown in the picture  '}
                           component={Input} name={'captcha'} validate={[required]}/> }
        { props.error && <div className={style.commonErrorLogin}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth) {
       return <Redirect to='/profile' />
       }
    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl} getCaptchaUrl={props.getCaptchaUrl}/>
    </>
}
let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})
export default connect(mapStateToProps,{login,getCaptchaUrl})(Login)