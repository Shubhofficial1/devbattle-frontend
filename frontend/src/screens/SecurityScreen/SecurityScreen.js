import React from 'react'
import Details from '../../components/Details/Details'
import Security from '../../components/Security/Security'
import Settings from '../../components/Settings/Settings'
import './SecurityScreen.css'
const SecurityScreen = () => {
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
