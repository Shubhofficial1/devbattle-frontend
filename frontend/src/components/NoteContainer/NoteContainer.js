import React from 'react'
import './NoteContainer.css'
import { AiOutlineDelete } from 'react-icons/ai'
const NoteContainer = ({ note, notes, setNotes }) => {
  const handleNoteDelete = (e) => {
    e.preventDefault()
    setNotes(notes.filter((n) => n.text !== note.text))
  }
  return (
    <div className='array__container'>
      <h1>{note.text}</h1>
      <AiOutlineDelete className='array__button' onClick={handleNoteDelete} />
    </div>
  )
}

export default NoteContainer
