import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom'
const Settings = () => {
  return (
    <div className='profile_settings noselect'>
      <h1>User Settings</h1>

      <Link className='link' to='/profile'>
        <p>Profile</p>
      </Link>

      <Link className='link' to='/account'>
        <p>Account</p>
      </Link>

      <Link className='link' to='/orders'>
        <p>Orders</p>
      </Link>

      <h1>App Setting</h1>

      <Link className='link' to='/appearance'>
        <p> Appearance </p>
      </Link>

      <Link className='link' to='/notification'>
        <p> Notifications </p>
      </Link>

      <h1>Billing Settings</h1>

      <Link className='link' to='/billing'>
        <p> Billing</p>
      </Link>

      <Link className='link' to='/premium'>
        <p> Premium</p>
      </Link>
    </div>
  )
}

export default Settings
