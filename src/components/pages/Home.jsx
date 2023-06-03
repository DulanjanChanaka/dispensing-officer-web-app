import React from 'react'
import SwiperComponent from './Swiper'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-content'>
      <h1>Society of Dispensing Officers</h1>
    <div className='swiper'>
        <SwiperComponent/>
    </div>
    </div>
  )
}

export default Home