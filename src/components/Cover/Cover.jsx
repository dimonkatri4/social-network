import React from 'react'
import CoverInfo from './CoverInfo/CoverInfo'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'

const Cover = () => {
    return (
        <div className='cover'>
            <CoverPhoto/>
            <MainPhoto/>
            <CoverInfo/>
        </div>
    )
}

export default Cover