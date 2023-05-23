import React from 'react'
import You from './Assets/youtube.PNG'
import Twit from './Assets/twitter.PNG'
import Face from './Assets/facebook.PNG'
import Faq from './Assets/help.PNG'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='follow'>
        <p><strong>Follow us</strong></p>
        <img src={You} alt="tube" />
        <img src={Twit} alt="ter" />
        <img src={Face} alt="book" />
      </div>
      <hr />
      <div className='google'>
        <div className="boxleft">
          <p><strong>GOOGLE</strong></p>
          <a href="privacy">Privacy and Terms</a>
          <a href="about">About Google</a>
          <a href="products">Google Products</a>
        </div>
        <div className='quest'>
          <img src={Faq} alt="tions" />
          <a href="he">Help</a>
          <p>English-United States</p>
        </div>
      </div>

    </div>
  )
}
