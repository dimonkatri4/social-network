import React from 'react'
import Navbar from './Navbar/Navbar'
import Profile from './Profile'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
    return (
        <div className='main-page'>
            <Navbar/>
            <Profile/>
            <Sidebar/>
        </div>
    )

    
}

export default Main

