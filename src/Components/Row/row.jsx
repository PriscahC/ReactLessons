import React from 'react'
import movie from '../../assets/titanposter.jpg'

function row({title}) {
  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
            <img className='row__poster row__posterLarge' src={movie} alt="" />
            <img className='row__poster row__posterLarge' src={movie} alt="" />
            <img className='row__poster row__posterLarge' src={movie} alt="" />
            <img className='row__poster row__posterLarge' src={movie} alt="" />
            <img className='row__poster row__posterLarge' src={movie} alt="" />
            <img className='row__poster row__posterLarge' src={movie} alt="" />
        </div>
    </div>
  )
}

export default row