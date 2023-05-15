import React from 'react'
import List from './Assets/tip.PNG'

export const Tip = () => {
    return (
        <div className='tips'>
            <div className='chrome'>
                <p>CHROME TIP</p>
                <h2>
                    <strong>
                        Read it later to save <br />
                        computer memory now
                    </strong>
                </h2>
                <p>
                    The Reading List is a bonus way to save computer memory. Add <br />
                    open tabs you want to come back to later to your reading list, then <br />
                    close the tab to get a memory boost.
                </p>
                <ol>
                    <li>
                        When you’re on a site you want to read later, like news, open the <br />
                        side panel ❒ and select <strong>Reading list.</strong>
                    </li>
                    <li>
                        Click <strong>Add current tab</strong>to add the website to your list.
                    </li>
                    <li>Then close the tab to free up memory.</li>
                </ol>
            </div>
            <div className='reading'>
                <img src={List} alt="readlist" />
            </div>
        </div>
    )
}
