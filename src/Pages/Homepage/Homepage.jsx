import React from 'react'
import Banner from '../../Components/Banner/banner'
import '../../app.css'
import Row from '../../Components/Row/row'



function Homepage() {
  return (
    <div>
      <Banner/>
      <Row title='Netflix Originals'/>
      <Row title='Trending Now'/>
      <Row title='Horror'/>
      <Row title='Romance'/>
      <Row title='Action'/>
      <Row title='Thrillers'/>
    </div>
  )
}

export default Homepage