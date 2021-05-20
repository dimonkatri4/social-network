import React from "react";
import style from './searchUsers.module.css'
import searchIcon from '../../../images/loupe.png'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";

const SearchUsersForm = (props) => {
    return <form className={style.searchBox} onSubmit={props.handleSubmit}>
        <Field type="text" name="searchUsers" component={Input} placeholder='Search Friend' />
        <button><img className={style.searchIcon} src={searchIcon} alt="search"/></button>
    </form>
}

const SearchUsersReduxForm = reduxForm({form:"searchUsers"})(SearchUsersForm)

export default SearchUsersReduxForm