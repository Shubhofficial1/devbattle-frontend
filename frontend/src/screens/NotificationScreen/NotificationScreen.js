import React from 'react'
import './NotificationScreen.css'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import Notification from '../../components/Notification/Notification'

const NotificationScreen = () => {
  return (
    <div className='notification'>
      <div className='notification_container'>
        <Settings />
        <Notification />
        <Details />
      </div>
    </div>
  )
}

export default NotificationScreen
