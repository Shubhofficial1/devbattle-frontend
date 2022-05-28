import React, { useEffect } from 'react'
import './NotificationScreen.scss'
import Details from '../../../components/Details/Details'
import Settings from '../../../components/Settings/Settings'
import Notification from '../../../components/Notification/Notification'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NotificationScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])
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
