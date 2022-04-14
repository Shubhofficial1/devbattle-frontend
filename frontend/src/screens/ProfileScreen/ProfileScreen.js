import React, { useEffect } from 'react'
import Content from '../../components/Content/Content'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])
  return (
    <div className='profile'>
      <div className='profile_container'>
        <Settings />
        <Content />
        <Details />
      </div>
    </div>
  )
}

export default ProfileScreen
