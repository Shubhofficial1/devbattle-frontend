import React from 'react'
import './HomeScreen.css'
import { CardDetails } from '../../Data/CardDetails'
import Card from '../../components/Card/Card'

const HomeScreen = () => {
  return (
    <div className='home'>
      {/* Action Container */}
      <div className='home_container'>
        <div className='home_left_container'>
          <h1>Devbattle</h1>
          <h3>
            The ultimate resource to prepare for coding interviews. Everything
            you need, in one streamlined platform.
          </h3>
          <div className='home_button_container noselect'>
            <button className='home_button'>buy Devbattle</button>
          </div>
        </div>
        <div className='home_right_container'></div>
      </div>

      {/* What we Offer */}
      <h1 className='title'>Devbattle 👨‍🎓</h1>
      <h1 className='title1'>Proudly educating the Developers Community</h1>
      <p className='description'>
        We're super proud to educate the Developers community and place students
        in the best companies on the planet.
      </p>
      <div className='home_card'>
        {CardDetails.map((card) => (
          <Card
            key={card.title}
            logo={card.logo}
            color={card.color}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
