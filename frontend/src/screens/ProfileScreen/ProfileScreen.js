import React from 'react'
import Content from '../../components/Content/Content'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import './ProfileScreen.css'
const ProfileScreen = () => {
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
