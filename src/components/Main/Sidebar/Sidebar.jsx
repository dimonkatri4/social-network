import React from 'react'
import s from "./sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div className='friends_block'>
                <div>Friends</div>
                <div>
                    <img src="" alt=""/>
                    <div><a href="">name surneme </a></div>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar