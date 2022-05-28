import React from 'react'
import RadioCard from '../RadioCard/RadioCard'
import './Appearance.scss'

const Appearance = () => {
  return (
    <div className='appearance_content'>
      <h1>Themes</h1>
      <RadioCard
        label={'Nightly (Dark)'}
        icon={'😎'}
        description={'Caring about your eyes since 2021.'}
        type={'themes'}
      />
      <RadioCard
        label={'Dimmed (Light)'}
        icon={'🤪'}
        description={'Rethink Your Life decisions.'}
        type={'themes'}
      />
    </div>
  )
}

export default Appearance
