import React, { useEffect } from 'react'
import Details from '../../components/Details/Details'
import Security from '../../components/Security/Security'
import Settings from '../../components/Settings/Settings'
import './SecurityScreen.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const SecurityScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])
  return (
    <div className='security'>
      <div className='security_container'>
        <Settings />
        <Security />
        <Details />
      </div>
    </div>
  )
}

export default SecurityScreen
