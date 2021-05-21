import React from "react";
import style from './searchUsers.module.css'
import searchIcon from '../../../images/loupe.png'
import {Field, reduxForm, reset} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const SearchUsersForm = (props) => {
    return <form className={style.searchBox} onSubmit={props.handleSubmit}>
        <Field type="text" name="searchUsers" component={Input} placeholder='Search Friend' />
        <button className={style.searchButton}><img className={style.searchIcon} src={searchIcon} alt="search"/></button>
        <span className={style.cleanButton} onClick={()=>props.searchUsers(null) && afterSubmit}> <FontAwesomeIcon icon={faTimes}/></span>
    </form>
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('searchUsers'));

const SearchUsersReduxForm = reduxForm({form:"searchUsers"})(SearchUsersForm)

export default SearchUsersReduxForm