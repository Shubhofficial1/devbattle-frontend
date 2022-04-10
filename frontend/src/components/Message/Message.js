import React from 'react'
import './Message.css'
const Message = ({ error }) => {
  return (
    <div className='message__container noselect'>
      <div className='message'>{error}</div>
    </div>
  )
}

export default Message
