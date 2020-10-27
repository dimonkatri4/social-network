import React from 'react'
import s from "./createPost.module.css"

const CreatePost = () => {
    return (
        <div className={`${s.profile_block} profile_block`} >
            <img src='images/photo-user.jpg' />
            <textarea rows="8" placeholder="write something"></textarea>
        </div>
    )
}

export default CreatePost