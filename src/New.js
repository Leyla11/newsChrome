import React from 'react'
import Izq from './Assets/left.PNG'
import Der from './Assets/right.PNG'

export const New = () => {
    return (
        <div className='new'>
            <img src={Izq} alt="left" />
            <div className='content'>
                <h1>What`s new in Chrome</h1>
                <p>Boost your memory and battery performance.</p>
            </div>
            <img src={Der} alt="right" />
        </div>
            )
}
