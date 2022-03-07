import React from 'react'
import './ProfileScreen.css'
const ProfileScreen = () => {
  return (
    <div className='profile'>
      <div className='profile_container'>
        <div className='profile_settings noselect'>
          <h1>User Settings</h1>
          <p>Profile</p>
          <p>Account</p>
          <p>Security & Privacy</p>
          <h1>Billing Settings</h1>
          <p>Billing</p>
          <p>Nitro</p>
          <h1>App Setting</h1>
          <p>Appearance</p>
          <p>Voice & Audio</p>
          <p>Notifications</p>
        </div>
        <div className='profile_content'>
          <h1>Profile Header </h1>
          <div className='profile_header'>
            <div className='profile_header_image'></div>
            <div className='profile_header_change'>
              <div className='profile_header_change_container noselect'>
                <h1>Change Profile Header</h1>
                <button>Delete</button>
              </div>
              <p>Only Jpg or PNG and maximum 5 MB</p>
            </div>
          </div>
          {/* Maybe in future , i'll implement a modal for changing profile pic , css design is already done */}
          {/* <h1>Profile Picture</h1>
          <div className='profile_image_container'>
            <div className='profile_image'></div>
            <div className='profile_image_change'>
              <div className='profile_image_change_container noselect'>
                <h1>Change Profile picture</h1>
                <button>Delete</button>
              </div>
              <p>Only Jpg or PNG and maximum 3 MB</p>
            </div>
          </div> */}
        </div>
        <div className='profile_details'>
          <div className='profile_identification'>
            <div className='profile_img'></div>
            <div className='profile_names'>
              <h1>Shubham kumar</h1>
              <p>@Shubham</p>
            </div>
          </div>
          <div className='profile_stats'>
            <span>3.4k Followers</span>
            <span>89 Following</span>
          </div>
          <div className='profile_description'>
            <p>
              We're super proud to educate the Developers community and place
              students in the best companies on the planet. ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
