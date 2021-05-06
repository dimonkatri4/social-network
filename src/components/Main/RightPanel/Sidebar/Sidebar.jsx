import React from 'react'
import Friend from './Friend/Friend'
import s from "./sidebar.module.css"

const Sidebar = (props) => {

    let friendElement = props.sidebarPage.friends
        .map(el=><Friend img = {el.img} name={el.name} surname={el.surname} key={el.id} />)


return (
    <div className={` ${s.sidebar} profile_block`}>
        <div className='friends_block'>
            <div className="caption">
                <h3 className="title">Friends</h3>
            </div>
            <div className={s.search}>
                <input type="text" placeholder="Search Friends..." />
            </div>
            {friendElement}
        </div>
    </div>
)
}

export default Sidebar