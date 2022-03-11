import React from 'react'
import Card from '../Card/Card'
import './HomeCard.css'
import { CardDetails } from '../../Data/CardDetails'

const HomeCard = () => {
  return (
    <>
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
    </>
  )
}

export default HomeCard
