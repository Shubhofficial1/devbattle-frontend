import React from 'react'
import './HomeScreen.css'
import HomeContainer from '../../components/HomeContainer/HomeContainer'
import HomeCard from '../../components/HomeCard/HomeCard'

const HomeScreen = () => {
  return (
    <div className='home'>
      {/* Cta container */}
      <HomeContainer />
      {/* What we offer */}
      <HomeCard />
      {/* Videos */}
      <div className='video_container'>
        <div className='video_left'>
          <div className='video'>
            {/* <iframe
              src='https://player.vimeo.com/video/253989945?h=c6db007fe5&color=ef0800&title=0&byline=0&portrait=0'
              width='100%'
              height='100%'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
        <div className='video_right'>
          <h1>High-Quality Videos.</h1>
          <p>
            We firmly believe in the effectiveness of video as an educational
            medium. That's why our crash courses come with over 50
            high-resolution videos, boasting crystal-clear audio for a truly
            premium experience. Concepts are explained at length and, where
            applicable, are showcased in action in the browser.
          </p>
          <p>
            Meanwhile, each of our 25 frontend coding questions includes a
            thorough video explanation, where we walk you through every step of
            the solution in detail. Preparing for frontend interviews has never
            been easier.
          </p>
          <button className='noselect'>Become a Devbattle expert</button>
        </div>
      </div>
      <div className='video_container'>
        <div className='video_right'>
          <h1>A State-Of-The-Art Workspace.</h1>
          <p>
            We firmly believe in the effectiveness of video as an educational
            medium. That's why our crash courses come with over 50
            high-resolution videos, boasting crystal-clear audio for a truly
            premium experience. Concepts are explained at length and, where
            applicable, are showcased in action in the browser.
          </p>
          <p>
            Meanwhile, each of our 25 frontend coding questions includes a
            thorough video explanation, where we walk you through every step of
            the solution in detail. Preparing for frontend interviews has never
            been easier.
          </p>
          <button className='noselect'>Become a Devbattle expert</button>
        </div>
        <div className='video_left'>
          <div className='video'></div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
