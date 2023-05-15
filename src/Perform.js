import React from 'react'
import Memory from './Assets/performance1.PNG'

export const Perform = () => {
  return (
    <div className='performance'>
        <div className='perform'>
            <p>PERFORMANCE</p>
            <h2> 
            <strong> Chrome frees up memory to <br />
            make browsing smoother
            </strong>
            </h2>
            <p>
            Memory Saver automatically frees up memory from tabs you <br />
            haven’t used in a while. This gives active tabs and other apps <br />
            more computer resources and keeps Chrome speedy. You can <br />
            manage Memory Saver and which sites it frees up memory from <br />
            in settings.
            </p>
            <ol>
                <li>
                If you want to manage Memory Saver, open Settings and click <br />
                <strong>
                Performance
                </strong>
                </li>
                <li>Open your tabs and browse as usual.</li>
                <li>Let Memory Saver do the rest.</li>
            </ol>
        </div>
        <div className='image'>
            <img src={Memory} alt="mem" />
        </div>
    </div>
 )
}
