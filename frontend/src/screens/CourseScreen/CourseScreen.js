import React from 'react'
import './CourseScreen.css'
import courses from '../../Data/Courses'
const CourseScreen = () => {
  return (
    <div className='course'>
      <h1>Explore Best Courses Here</h1>
      <p>Learn Anything here with best possible guidance</p>
      <div className='course__grid'>
        {courses.map((course) => (
          <div className='course__card noselect'>
            <div className='course_img'></div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>
              {course.rating} Rating from {course.numReviews} Reviews
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseScreen
