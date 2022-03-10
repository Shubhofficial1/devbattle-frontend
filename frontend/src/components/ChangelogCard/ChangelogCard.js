import React from 'react'
import './ChangelogCard.css'

const ChangelogCard = ({ type, text, date, color }) => {
  return (
    <div className='changelog_item'>
      <div className='changelog_item_left noselect'>
        <p style={{ backgroundColor: `${color}` }}>{type}</p>
      </div>
      <div className='changelog_item_middle'>
        <p>{text}</p>
      </div>
      <div className='changelog_item_right noselect'>{date}</div>
    </div>
  )
}

ChangelogCard.defaultProps = {
  color: '#5773ff',
}
export default ChangelogCard
