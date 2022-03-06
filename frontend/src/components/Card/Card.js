import React from 'react'
import './Card.css'

const Card = ({ logo, color, title, description }) => {
  return (
    <div className='card noselect'>
      <div className='card_logo' style={{ backgroundColor: `${color}` }}>
        {logo}
      </div>
      <h2 className='card_title'>{title}</h2>
      <p className='card_description'>{description}</p>
    </div>
  )
}

export default Card
