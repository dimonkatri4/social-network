import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg' />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile