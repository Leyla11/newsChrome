import React from 'react'
import Jan from './Assets/january.PNG'
import Nov from './Assets/november.PNG'
import Sep from './Assets/september.PNG'

export const Explore = () => {
  return (
    <div className='more'>
        <h4>Explore more features</h4>
        <div className='date'>
            <img src={Jan} alt="nuary" />
            <img src={Nov} alt="vember" />
            <img src={Sep} alt="tember" />
        </div>
        <div className="btncenter">
          <a href="view"><strong>View more v</strong></a>
        </div>
    </div>
  )
}

