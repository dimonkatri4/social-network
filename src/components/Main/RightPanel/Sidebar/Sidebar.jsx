import React, {useEffect, useState} from 'react'
import Friend from './Friend/Friend'
import s from "./sidebar.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const Sidebar = (props) => {

    const onChange = (formData) => {
        props.searchUsers(formData.searchUsers);
    }

    let friendElement = props.users
        .map(el=><Friend img = {el.photos.small} name={el.name} key={el.id} />)




return (
    <div className={` ${s.sidebar} profile_block`}>
        <div className='friends_block'>
            <div className="caption">
                <h3 className="title">Friends</h3>
            </div>
            <div className={s.search}>
                <SearchUsersInSidebarReduxForm onChange={onChange}/>
            </div>
            {friendElement}
        </div>
    </div>
)
}

const SearchUserInSidebar = ({ handleChange, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component={Input} placeholder="Search Friends..." name="searchUsers" onChange={handleChange}/>
    </form>
}

const SearchUsersInSidebarReduxForm = reduxForm({form:"searchUsersInSidebar"})(SearchUserInSidebar)

export default Sidebar