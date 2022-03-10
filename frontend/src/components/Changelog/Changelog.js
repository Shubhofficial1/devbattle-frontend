import React from 'react'
import { changelogDetails } from '../../Data/changelogDetails'
import ChangelogCard from '../ChangelogCard/ChangelogCard'
import './Changelog.css'
const Changelog = () => {
  return (
    <div className='changelog_content'>
      <h1>Changelog</h1>
      {changelogDetails.map((item) => (
        <ChangelogCard
          key={item.date}
          type={item.type}
          text={item.text}
          date={item.date}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default Changelog
