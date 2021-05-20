import React from "react";
import style from './searchUsers.module.css'
import searchIcon from '../../../images/loupe.png'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const SearchUsersForm = (props) => {
    return <form className={style.searchBox} onSubmit={props.handleSubmit}>
        <Field type="text" name="searchUsers" component={Input} placeholder='Search Friend' />
        <button className={style.searchButton}><img className={style.searchIcon} src={searchIcon} alt="search"/></button>
        <button className={style.cleanButton} onClick={() => props.searchUsers(null)}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
    </form>
}

const SearchUsersReduxForm = reduxForm({form:"searchUsers"})(SearchUsersForm)

export default SearchUsersReduxForm