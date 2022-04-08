import React from 'react'
import './CourseScreen.css'
import courses from '../../Data/Courses'
import Rating from '../../components/Rating/Rating'
import { Link } from 'react-router-dom'
const CourseScreen = () => {
  return (
    <div className='course'>
      <h1>Explore Best Courses Here</h1>
      <p>Learn Anything here with best possible guidance</p>
      <div className='course__grid'>
        {courses.map((course) => (
          <Link to={`/courses/${course._id}`}>
            <div key={course._id} className='course__card noselect'>
              <div className='course_img'></div>
              <h1>{course.name}</h1>
              <p>{course.description}</p>
              <Rating
                value={course.rating}
                text={`${course.numReviews} reviews`}
              />
              <div className='course__price'>
                <div className='course__stacks'>
                  {course.stacks.map((stack) => (
                    <div className='course__stack'>
                      <img src={stack.imageUrl} alt={stack.name}></img>
                    </div>
                  ))}
                </div>
                <h3>₹{course.price}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CourseScreen
