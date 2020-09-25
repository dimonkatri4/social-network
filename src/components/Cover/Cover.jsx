import React from 'react'
import CoverMenu from './CoverMenu/CoverMenu'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'

const Cover = () => {
    return (
        <div className='cover'>
            <CoverPhoto/>
            <MainPhoto/>
            <CoverMenu/>
        </div>
    )
}

export default Cover