import React from 'react'
import './StackContainer.css'
import { AiOutlineDelete } from 'react-icons/ai'

const StackContainer = ({ stack, stacks, setStacks }) => {
  const handleStackDelete = (e) => {
    e.preventDefault()
    setStacks(stacks.filter((s) => s.name !== stack.name))
  }

  return (
    <div className='array__container'>
      <h1>{stack.name}</h1>
      <AiOutlineDelete className='array__button' onClick={handleStackDelete} />
    </div>
  )
}

export default StackContainer
