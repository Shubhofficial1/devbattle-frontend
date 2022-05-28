import React from 'react'
import './RadioCard.scss'
const RadioCard = ({ label, icon, description, type }) => {
  return (
    <div className='radio_card noselect'>
      <div className='radio_card_left'>
        <label for={label}>
          {label} {icon}
        </label>
        <p>{description}</p>
      </div>
      <input
        type='radio'
        id={label}
        name={type}
        className='radio_card_right'
        value={label}
        checked
      />
    </div>
  )
}

export default RadioCard
