import React from 'react'
import './FeatureContainer.scss'
import { AiOutlineDelete } from 'react-icons/ai'

const FeatureContainer = ({ feature, features, setFeatures }) => {
  const handleFeatureDelete = (e) => {
    e.preventDefault()
    setFeatures(features.filter((f) => f.text !== feature.text))
  }
  return (
    <div className='array__container'>
      <h1>{feature.text}</h1>
      <AiOutlineDelete
        className='array__button'
        onClick={handleFeatureDelete}
      />
    </div>
  )
}

export default FeatureContainer
