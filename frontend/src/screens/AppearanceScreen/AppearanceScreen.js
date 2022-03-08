import React from 'react'
import Appearance from '../../components/Appearance/Appearance'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import './AppearanceScreen.css'
const AppearanceScreen = () => {
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
