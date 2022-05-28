import React from 'react'
import './Details.scss'
import { useSelector } from 'react-redux'
const Details = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <div className='profile_details'>
      <div className='profile_identification'>
        <div className='profile_img'></div>
        <div className='profile_names'>
          <h1>{userInfo?.name}</h1>
          <p>{userInfo?.email}</p>
        </div>
      </div>
      <div className='profile_description'>
        <p>{userInfo?.bio}</p>
      </div>
    </div>
  )
}

export default Details
