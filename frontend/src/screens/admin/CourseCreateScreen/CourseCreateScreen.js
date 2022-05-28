import React, { useEffect, useState } from 'react'
import './CourseCreateScreen.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCourse } from '../../../actions/coursesActions'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
import { COURSE_CREATE_RESET } from '../../../constants/coursesConstants'
import StackContainer from '../../../components/StackContainer/StackContainer'
import NoteContainer from '../../../components/NoteContainer/NoteContainer'
import FeatureContainer from '../../../components/FeatureContainer/FeatureContainer'

const CourseCreateScreen = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [language, setLanguage] = useState('')
  const [stackInput, setStackInput] = useState('')
  const [stackImageUrl, setStackImageUrl] = useState('')
  const [stacks, setStacks] = useState([])

  const [noteInput, setNoteInput] = useState('')
  const [notes, setNotes] = useState([])

  const [featureInput, setFeatureInput] = useState('')
  const [features, setFeatures] = useState([])

  const dispatch = useDispatch()
  const history = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const courseCreate = useSelector((state) => state.courseCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = courseCreate

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history('/')
    }
    if (successCreate) {
      setName('')
      setImageUrl('')
      setVideoUrl('')
      setDescription('')
      setCategory('')
      setPrice(0)
      setLanguage('')
      history('/admin/courses')
      dispatch({ type: COURSE_CREATE_RESET })
    }
  }, [history, userInfo, dispatch, successCreate])

  const addStackToList = (e) => {
    e.preventDefault()
    setStacks([
      ...stacks,
      {
        name: stackInput,
        imageUrl: stackImageUrl,
      },
    ])
    setStackInput('')
    setStackImageUrl('')
  }

  const addNoteToList = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        text: noteInput,
      },
    ])
    setNoteInput('')
  }

  const addFeatureToList = (e) => {
    e.preventDefault()
    setFeatures([
      ...features,
      {
        text: featureInput,
      },
    ])
    setFeatureInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      createCourse({
        name,
        imageUrl,
        videoUrl,
        description,
        category,
        price,
        language,
        stacks,
        notes,
        features,
      })
    )
  }
  return (
    <>
      {loadingCreate ? (
        <Loader />
      ) : errorCreate ? (
        <Message error={errorCreate} />
      ) : (
        <div className='course__create'>
          <h1>Create Course</h1>
          <form onSubmit={handleSubmit}>
            <p>User Name</p>
            <input
              placeholder='Enter name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <p>Image Url</p>
            <input
              placeholder='Enter Image Url'
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value)
              }}
            />
            <p>Video Url</p>
            <input
              placeholder='Enter video url'
              value={videoUrl}
              onChange={(e) => {
                setVideoUrl(e.target.value)
              }}
            />
            <p>description</p>
            <input
              placeholder='Enter Description'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
            <p>Category</p>
            <input
              placeholder='Enter category'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
            <p>Price</p>
            <input
              placeholder='Enter price'
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
            <p>Language</p>
            <input
              placeholder='Enter Language'
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value)
              }}
            />
            <p>Tech Stack</p>
            <input
              placeholder='Enter Stack To be added in array'
              value={stackInput}
              onChange={(e) => {
                setStackInput(e.target.value)
              }}
            />
            <p>Tech Stack Image Url</p>
            <input
              placeholder='Enter Stack To be added in array'
              value={stackImageUrl}
              onChange={(e) => {
                setStackImageUrl(e.target.value)
              }}
            />
            <button
              disabled={!stackInput && !stackImageUrl}
              onClick={addStackToList}
            >
              + Stack
            </button>
            {stacks?.map((stack) => (
              <StackContainer
                stack={stack}
                stacks={stacks}
                setStacks={setStacks}
                key={stack.name}
              />
            ))}

            <p>Add Note</p>
            <input
              placeholder='Enter note To be added in array'
              value={noteInput}
              onChange={(e) => {
                setNoteInput(e.target.value)
              }}
            />

            <button disabled={!noteInput} onClick={addNoteToList}>
              + Notes
            </button>

            {notes?.map((note) => (
              <NoteContainer
                note={note}
                notes={notes}
                setNotes={setNotes}
                key={note.text}
              />
            ))}

            <p>Features</p>
            <input
              placeholder='Enter Features To be added in array'
              value={featureInput}
              onChange={(e) => {
                setFeatureInput(e.target.value)
              }}
            />
            <button disabled={!featureInput} onClick={addFeatureToList}>
              + Features
            </button>

            {features?.map((feature) => (
              <FeatureContainer
                key={feature.text}
                feature={feature}
                features={features}
                setFeatures={setFeatures}
              />
            ))}

            <button type='submit'>Submit</button>
          </form>
        </div>
      )}
    </>
  )
}

export default CourseCreateScreen
