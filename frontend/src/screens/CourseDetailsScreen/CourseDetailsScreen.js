import React from 'react'
import './CourseDetailsScreen.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import courses from '../../Data/Courses'
import Rating from '../../components/Rating/Rating'

const CourseDetailsScreen = () => {
  const { id } = useParams()
  const course = courses.find((course) => course._id === id)
  console.log(course)
  const history = useNavigate()

  const handleBackClick = () => {
    history('/courses')
  }
  return (
    <div className='course__details'>
      <button onClick={handleBackClick} className='back-btn'>
        Go Back
      </button>
      {/* <pre>{JSON.stringify(course, null, 3)}</pre> */}
      <div className='course__container'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <Rating />
      </div>
    </div>
  )
}

export default CourseDetailsScreen
