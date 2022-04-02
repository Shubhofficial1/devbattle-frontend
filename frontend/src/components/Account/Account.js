import React from 'react'
import RadioCard from '../RadioCard/RadioCard'
import './Account.css'
const Account = () => {
  return (
    <div className='account_content'>
      <h1>Status</h1>
      <RadioCard
        label={'Online'}
        icon={'🔴'}
        description={'When you are online, you will be visible to everyone.'}
        type={'status'}
      />
      <RadioCard
        label={'Do not Disturb'}
        icon={'🎯'}
        description={'Let your followers know that you are away.'}
        type={'status'}
      />
      <RadioCard
        label={'Offline'}
        icon={'😴'}
        description={'Wear Harry Potters invisiblity cloak'}
        type={'status'}
      />
      <div className='account_remove_container '>
        <h1 className='delete_account_text'>Delete Account</h1>

        <div className='account_delete_container'>
          <p>
            this is one way operation. once you delete your account , there is
            no going back. please be certain ⚡.
          </p>
          <button className='noselect'>
            <p>Delete your account</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
