import React from 'react'
import '../../app.css'


function banner() {
  return (
    <div className='banner'>
        <div className="banner_content">
            <div className="banner__title">
                <h1>Lion King</h1>
            </div>
            <div className="banner__buttons">
                <button className="banner__button">play</button>
                <button className="banner__button">My list</button>
            </div>
            <div className="banner__description">
                <p>This is the best movie site for all your entertainment. Enjoy!</p>
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    </div>
  )
}

export default banner