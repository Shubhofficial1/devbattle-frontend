import React from 'react'
import './Content.css'
import { AiFillDelete } from 'react-icons/ai'
const Content = () => {
  return (
    <div className='profile_content'>
      <div className='profile_header'>
        <div className='profile_header_image'></div>
        <div className='profile_header_change'>
          <div className='profile_header_change_container noselect'>
            <h1>Change Profile Header</h1>
            <button>
              <AiFillDelete />
            </button>
          </div>
          <p>Only Jpg or PNG and maximum 5 MB</p>
        </div>
      </div>
      <div className='profile_form'>
        <h1>Public Profile</h1>
        <div className='profile_form_row'>
          <div className='profile_form_col'>
            <h2>Display Name</h2>
            <input />
          </div>
          <div className='profile_form_col'>
            <h2>username</h2>
            <input />
          </div>
        </div>
        <div className='profile_form_row_all'>
          <h2>Bio</h2>
          <textarea maxLength={140} />
        </div>
        <div className='profile_button'>
          <button className='noselect'>
            <p>Save Changes</p>
          </button>
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
  )
}

export default Content
