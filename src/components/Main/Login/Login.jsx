import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../../redux/auth-reducer";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={'input'} name={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember Me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let {login, password, rememberMe,captcha} = formData;
        props.logIn(login, password, rememberMe,captcha)
    }
    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{logIn})(Login)