import React from 'react'
import './CourseDetailsScreen.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import courses from '../../Data/Courses'
import { FaRegHeart } from 'react-icons/fa'

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
      <div className='course__link'>
        <span className='course__course__link' onClick={handleBackClick}>
          Courses
        </span>
        <span className='course__course__current'>/ {course.name}</span>
      </div>

      <div className='details__container'>
        <div className='course__details'>
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
          <div className='course__video__container'></div>
          <h1 className='course__outline__price'>₹{course.price}</h1>
          <p className='course__outline__includes'>
            59.5 hours on-demand video
          </p>
          <p className='course__outline__includes'>12 downloadable resources</p>
          <p className='course__outline__includes'>12 coding exercises</p>
          <p className='course__outline__includes'>Full lifetime access</p>
          <p className='course__outline__includes'>Certificate of completion</p>
          <div className='course__purchase__container'>
            <button className='course__buy__button noselect'>Buy Now</button>
            <button className='course__wishlist__button noselect'>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsScreen
