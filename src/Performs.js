import React from 'react'
import Conserve from './Assets/performance2.PNG'

export const Performs = () => {
  return (
    <div className='performance2'>
    <div className='image2'>
        <img src={Conserve} alt="conser" />
    </div>
    <div className='perform2'>
    <p>PERFORMANCE</p>
    <h3>
    <strong>
        Conserve battery power <br />
        when you`re unplugged
    </strong>
    </h3>
    <p>
    Running low on battery and don’t have a charger nearby? Energy <br />
    Saver helps your battery last longer when you’re on the go.
    </p>
    <ol>
        <li>While your laptop is unplugged, browse as usual.</li>
        <li>
        When you have 20% battery left, Energy Saver automatically <br />
        turns on to earn you some extra time.
        </li>
        <li>
        If you want to manage Energy Saver, open Settings and click <br /> 
        <strong>
        Performance.
        </strong>
        </li>
    </ol>
    </div>
    </div>
 )
}
