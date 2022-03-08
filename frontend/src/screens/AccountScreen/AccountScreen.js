import React from 'react'
import Account from '../../components/Account/Account'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import './AccountScreen.css'
const AccountScreen = () => {
  return (
    <div className='account'>
      <div className='account_container'>
        <Settings />
        <Account />
        <Details />
      </div>
    </div>
  )
}

export default AccountScreen
