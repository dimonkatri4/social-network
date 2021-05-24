import React from "react";
import style from './searchUsers.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes,faSearch} from '@fortawesome/free-solid-svg-icons'

const SearchUsersForm = (props) => {
    const clearForm = () => {
        props.reset();
        props.userSearchName && props.searchUsers(null);
    }
    return <form className={style.searchBox} onSubmit={props.handleSubmit}>
        <Field type="text" name="searchUsers" component={Input} placeholder='Search Friend' />
        <button className={style.searchButton}><FontAwesomeIcon icon={faSearch}/></button>
        <span className={style.cleanButton} onClick={clearForm} > <FontAwesomeIcon icon={faTimes}/></span>
    </form>
}


const SearchUsersReduxForm = reduxForm({form:"searchUsers"})(SearchUsersForm)

export default SearchUsersReduxForm