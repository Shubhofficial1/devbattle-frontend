import React from 'react'
import './HomeContainer.scss'
const HomeContainer = () => {
  return (
    <div className='home_container'>
      <div className='home_left_container'>
        <h1>Devbattle</h1>
        <h3>
          An exceptional platform to learn frontend development. Everything you
          need to crush the frontend interviews.
        </h3>
        <div className='home_button_container noselect'>
          <button className='home_button'>Buy Devbattle</button>
        </div>
      </div>
      <div className='home_right_container'></div>
    </div>
  )
}

export default HomeContainer
