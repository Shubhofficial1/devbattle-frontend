import React, { useEffect, useState } from 'react'
import './CourseCreateScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCourse } from '../../../actions/coursesActions'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
import { COURSE_CREATE_RESET } from '../../../constants/coursesConstants'

const CourseCreateScreen = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [language, setLanguage] = useState('')

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
          <form className='course__create__form' onSubmit={handleSubmit}>
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
            <button className='course__create__button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default CourseCreateScreen
