import React from 'react'
import RadioCard from '../RadioCard/RadioCard'
import './Notification.scss'
const Notification = () => {
  return (
    <div className='notification_content'>
      <h1>Notification</h1>
      <RadioCard
        label={'Enable Desktop Notification'}
        icon={'📢'}
        description={
          'Notification includes new updates, new messages, and new comments.'
        }
        type={'themes'}
      />
    </div>
  )
}

export default Notification
