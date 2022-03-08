import React from 'react'
import './ChangelogScreen.css'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import Changelog from '../../components/Changelog/Changelog'

const ChangelogScreen = () => {
  return (
    <div className='changelog'>
      <div className='changelog_container'>
        <Settings />
        <Changelog />
        <Details />
      </div>
    </div>
  )
}

export default ChangelogScreen
