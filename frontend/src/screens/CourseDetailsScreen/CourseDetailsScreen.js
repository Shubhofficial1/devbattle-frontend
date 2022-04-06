import React from 'react'
import './CourseDetailsScreen.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import courses from '../../Data/Courses'

const CourseDetailsScreen = () => {
  const { id } = useParams()
  const course = courses.find((course) => course._id === id)
  console.log(course)
  const history = useNavigate()

  const handleBackClick = () => {
    history('/courses')
  }
  return (
    <div className='course__details__container'>
      {/* <button onClick={handleBackClick} className='back-btn'>
        Go Back
      </button> */}
      <div className='course__link'>
        <span className='course__course__link' onClick={handleBackClick}>
          Courses
        </span>
        <span className='course__course__current'>/ {course.name}</span>
      </div>

      <div className='details__container'>
        <div className='course__details'>
          {/* <div className='course__link'>
            <span className='course__course__link' onClick={handleBackClick}>
              Courses
            </span>
            <span className='course__course__current'>/ {course.name}</span>
          </div> */}

          <div className='course__overview'>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <div className='course__image'></div>
            <div className='notes__title'>Notes</div>
            <div className='notes__container'>
              <div className='notes'>
                {course.notes.map((note) => (
                  <p className='course__notes'>{note.text}</p>
                ))}
              </div>
              <div className='course__author__container noselect'>
                <h1>About Instructor</h1>
                <div className='author__card'>
                  <div className='card__left'>
                    <div className='author__image'></div>
                  </div>
                  <div className='card__right'>
                    <h2>Shubham Kumar</h2>
                    <p>Seniour Analyst</p>
                  </div>
                </div>
                <div className='author__description'>
                  <p>
                    we're super proud to educate the developers community and
                    place students in the best companies on the planet. ⭐
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='course__outline'>
          {/* {course.content.map((cont) => (
            <h1>{cont.sectionTitle}</h1>
          ))} */}
        </div>
      </div>
      {/* <pre>{JSON.stringify(course, null, 3)}</pre> */}
    </div>
  )
}

export default CourseDetailsScreen
