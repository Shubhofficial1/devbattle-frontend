import React from 'react'
import './Message.scss'
const Message = ({ error }) => {
  return (
    <div className='message__container noselect'>
      <div className='message'>{error}</div>
    </div>
  )
}

export default Message
