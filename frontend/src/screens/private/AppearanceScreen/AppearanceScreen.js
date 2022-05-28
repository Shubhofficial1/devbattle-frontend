import React, { useEffect } from 'react'
import './AppearanceScreen.scss'
import Appearance from '../../../components/Appearance/Appearance'
import Details from '../../../components/Details/Details'
import Settings from '../../../components/Settings/Settings'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AppearanceScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])
  return (
    <div className='appearance'>
      <div className='appearance_container'>
        <Settings />
        <Appearance />
        <Details />
      </div>
    </div>
  )
}

export default AppearanceScreen
